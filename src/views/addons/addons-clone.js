import React, { useEffect, useState } from 'react';
import { Card, Spin, Steps } from 'antd';
import LanguageList from 'components/language-list';
import { useParams } from 'react-router-dom';
import productService from 'services/product';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { disableRefetch, setMenuData } from 'redux/slices/menu';
import { useTranslation } from 'react-i18next';
import { useQueryParams } from 'helpers/useQueryParams';
import { steps } from './steps';
import AddonStock from './addons-stock';
import AddonFinish from './addons-finish';
import AddonIndex from './addons-index';

const { Step } = Steps;

const AddonClone = () => {
  const { t } = useTranslation();
  const { uuid } = useParams();
  const queryParams = useQueryParams();
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const { languages } = useSelector((state) => state.formLang, shallowEqual);
  const dispatch = useDispatch();

  const current = Number(queryParams.values?.step || 0);
  const [loading, setLoading] = useState(activeMenu.refetch);
  const next = () => {
    const step = current + 1;
    queryParams.set('step', step);
  };
  const prev = () => {
    const step = current - 1;
    queryParams.set('step', step);
  };

  const createImages = (items) =>
    items.map((item) => ({
      uid: item.id,
      name: item.path,
      url: item.path,
    }));

  const createSelectObject = (item) => {
    if (!item) return null;
    return {
      label: item.translation ? item.translation.title : item.title,
      value: item.id,
    };
  };

  function fetchProduct(uuid) {
    setLoading(true);
    productService
      .getById(uuid)
      .then((res) => {
        const data = {
          ...res.data,
          ...getLanguageFields(res?.data),
          shop: createSelectObject(res?.data?.shop),
          category: createSelectObject(res?.data?.category),
          brand: createSelectObject(res?.data?.brand),
          unit: createSelectObject(res?.data?.unit),
          images: createImages(res?.data?.galleries),
          extras: res?.data?.stocks?.[0]?.extras?.map(
            (el) => el?.extra_group_id,
          ),
          stocks: res?.data?.stocks?.map((stock) => ({
            ...stock,
            ...Object.assign(
              {},
              ...stock?.extras?.map((extra, idx) => ({
                [`extras[${idx}]`]: extra?.id,
              })),
            ),
            quantity: stock?.quantity ?? 0,
            extras: undefined,
          })),
          properties: res?.data?.properties?.map((item, index) => ({
            id: index,
            [`key[${item?.locale}]`]: item?.key,
            [`value[${item?.locale}]`]: item?.value,
          })),
          translation: undefined,
          translations: undefined,
          interval: res?.data?.interval ?? 1,
          tax: res?.data?.tax ?? 0,
        };
        dispatch(setMenuData({ activeMenu, data }));
      })
      .finally(() => {
        setLoading(false);
        dispatch(disableRefetch(activeMenu));
      });
  }

  function getLanguageFields(data) {
    if (!data?.translations) {
      return {};
    }
    const { translations } = data;
    const result = languages.map((item) => ({
      [`title[${item.locale}]`]: translations.find(
        (el) => el.locale === item.locale,
      )?.title,
      [`description[${item.locale}]`]: translations.find(
        (el) => el.locale === item.locale,
      )?.description,
    }));
    return Object.assign({}, ...result);
  }

  useEffect(() => {
    if (activeMenu.refetch) {
      fetchProduct(uuid);
    }
  }, [activeMenu.refetch]);

  const onChange = (step) => {
    dispatch(setMenuData({ activeMenu, data: { ...activeMenu.data, step } }));
    queryParams.set('step', step);
  };

  return (
    <Card title={t('clone.addon')} extra={<LanguageList />}>
      <Steps current={current} onChange={onChange}>
        {steps.map((item) => (
          <Step title={t(item.title)} key={item.title} />
        ))}
      </Steps>
      {!loading ? (
        <div className='steps-content'>
          {steps[current].content === 'First-content' && (
            <AddonIndex next={next} />
          )}

          {steps[current].content === 'Third-content' && (
            <AddonStock next={next} prev={prev} current={current} />
          )}

          {steps[current].content === 'Finish-content' && (
            <AddonFinish prev={prev} />
          )}
        </div>
      ) : (
        <div className='d-flex justify-content-center align-items-center'>
          <Spin size='large' className='py-5' />
        </div>
      )}
    </Card>
  );
};
export default AddonClone;
