import ProductCardList from 'components/ProductCardList/ProductCardList';
import useFetch from 'hooks/useFetch';
import { getProducts } from 'apis/products';
import LoadingErrorCard from '../components/LoadingErrorCard/LoadingErrorCard';
import type { Product } from 'types/product';

const ProductListPage = () => {
  const { data: products, errorState, isLoading, fetchData } = useFetch<Product[]>(getProducts);

  if (isLoading) return <div>상품목록 로딩중...</div>;
  if (errorState?.isError) return <LoadingErrorCard onClickRetryButton={fetchData} />;

  return <ProductCardList products={products ?? []} />;
};

export default ProductListPage;
