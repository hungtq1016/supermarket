import Categories from '@/ui/Top/Categories';
import Discount from '@/ui/Top/Discount';
import Review from '@/ui/Top/Review';
import Term from '@/ui/Term';
import ProductSection from '@/ui/ProductSection';
import Banner from '@/ui/Top/Banner';

export const metadata = {
  title: 'Trang Chủ'
};

export default function Page() {
  var date = Date.now();
  return (
    <>
      <Banner/>
      <ProductSection title="Giảm Giá Bất Ngờ" about="Flash Sales" isSlider={true} show={6} timer={true} countTime={date} btnBottom={true}/>
      <Categories/>
      <ProductSection title="Tháng Này" about="Nổi bật" isSlider={false} show={4} btnTop={true}/>
      <Discount/>
      <ProductSection title="Khám Phá" about="Sản phẩm nổi bật" isSlider={true} show={10} btnBottom={true} rows={2}/>
      <Review/>
      <Term/>
    </>
  );
}
