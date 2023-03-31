import { useEffect, useState } from '@wordpress/element';



const products = [
	{ name: "Product 1", price: "$10", image: "product1.jpg" },
	{ name: "Product 2", price: "$15", image: "product2.jpg" },
	{ name: "Product 3", price: "$20", image: "product3.jpg" },
	{ name: "Product 4", price: "$25", image: "product4.jpg" },
	{ name: "Product 5", price: "$30", image: "product5.jpg" },
];

const collections = [
	{ name: "Collection 1", link: "/collection1" },
	{ name: "Collection 2", link: "/collection2" },
	{ name: "Collection 3", link: "/collection3" },
	{ name: "Collection 4", link: "/collection4" },
	{ name: "Collection 5", link: "/collection5" },
];

export const TabbedComponent = () => {
	const [selectedTab, setSelectedTab] = useState("allFlavors");

	const handleTabClick = (tabName) => {
		setSelectedTab(tabName);
	};

	return (
		<div>
			<div className="tab-buttons">
				<button
					onClick={() => handleTabClick("allFlavors")}
					className={selectedTab === "allFlavors" ? "active" : ""}
				>
					All Flavors
				</button>
				<button
					onClick={() => handleTabClick("collections")}
					className={selectedTab === "collections" ? "active" : ""}
				>
					Collections
				</button>
			</div>
			{selectedTab === "allFlavors" && (
				<div className="product-list">
					{products.map((product) => (
						<div key={product.name} className="product-item">
							<img src={product.image} alt={product.name} />
							<div className="product-info">
								<h3>{product.name}</h3>
								<p>{product.price}</p>
							</div>
						</div>
					))}
				</div>
			)}
			{selectedTab === "collections" && (
				<div className="collection-list">
					{collections.map((collection) => (
						<a
							key={collection.name}
							href={collection.link}
							className="collection-item"
						>
							<h3>{collection.name}</h3>
						</a>
					))}
				</div>
			)}
		</div>
	);
};
