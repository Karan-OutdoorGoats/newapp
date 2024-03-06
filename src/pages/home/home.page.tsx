import FixedArrow from "components/FixedArrow/FixedArrow";
import AddToCart from "components/Modal/AddToCart/AddToCart";
import NavBar from "components/NavBar/navbar";
import { useGLQuery } from "graphql/operations/useGLQuery";
import { useScreenSize } from "hooks/useScreenSize";
import BrandRoll from "./components/brand-roll";
import LatestBlog from "./components/latest-blog";
import MobileTopBanner from "./components/mobile/mobile-top-banner";
import NavBarMemu from "./components/mobile/nav-bar-menu";
import TopCategory from "./components/mobile/top-category";
import MultiRowGrid from "./components/multi-row-grid";
import NavBarContainer from "./components/nav-bar-container";
import ProductTypeCard from "./components/product-type-card";
import SeasonSingleRowGrid from "./components/season-single-row-grid";
import SingleRowGrid from "./components/single-row-grid";
import SoloBanner from "./components/solo-banner";
import TopBanner from "./components/top-banner";
import { useHome } from "./home.hooks";
import MainHeader from "components/MainHeader/main-header";
import SalesBanner from "components/SalesBanner/SalesBanner";
import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";

const Home = () => {
	const { setViewProduct, viewProduct, setShowMenuViaHam, showMenuViaHam } =
		useHome();
	const screenSize = useScreenSize();

	const queryData = useGLQuery();

	console.log("=============================");
	console.log(queryData);
	console.log("=============================");

	// if (queryData.isLoading) {
	//   return <div>Loading</div>;
	// }

	return (
		<div>
			<div className="hidden sm:block">
			<SalesBanner />
			</div>
			<div className="sticky hidden sm:block top-0 z-[1000]">
				<MainHeader />
				<hr  className="h-[1px] text-primaryColor bg-pritext-primaryColor" />
				<NavBar />
			</div>
			<div className="relative home_container">
				<AddToCart
					isOpen={viewProduct}
					onClose={() => setViewProduct(false)}
				/>
				<NavBarMemu
					showMenuViaHam={showMenuViaHam}
					setShowMenuViaHam={() => setShowMenuViaHam(true)}
				/>
				<div className="block sm:hidden">
					<NavBarContainer
						showMenuViaHam={showMenuViaHam}
						closeMenu={() => setShowMenuViaHam(false)}
					/>
				</div>

				{screenSize.width > 600 && (
					<div className="top_banner">
						<TopBanner />
					</div>
				)}
				{screenSize.width <= 600 && <MobileTopBanner />}
				<div className="block md:hidden">
					<TopCategory title="Top Categories" />
				</div>

				<MultiRowGrid
					title="New Drops"
					openViewProduct={() => setViewProduct(true)}
				/>
				<BrandRoll />
				<div className="hidden md:block">
					<SoloBanner />
				</div>
				<MultiRowGrid
					title="Best Sellers"
					openViewProduct={() => setViewProduct(true)}
				/>
				<ProductTypeCard />
				{/* <SingleRowGrid title="Season Picks" openViewProduct={() => setViewProduct(true)} /> */}
				<SeasonSingleRowGrid
					title="Our Premium Collection"
					openViewProduct={() => setViewProduct(true)}
				/>
				<SingleRowGrid
					title="Trending"
					openViewProduct={() => setViewProduct(true)}
				/>
				<LatestBlog title="Latest Blogs" />
				<DownloadApp/>
				<Footer/>
				<FixedArrow />
			</div>
		</div>
	);
};

export default Home;
