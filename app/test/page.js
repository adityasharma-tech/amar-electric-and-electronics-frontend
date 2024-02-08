import BannerCarousel from "@/components/home/banner-carousel";
import BrandCarausel from "@/components/home/brand-carausel";
import ProductCollection from "@/components/home/home-collection";

export default function Test() {
    return (
        <div id="page">
            <div className="full-color-background">
                {/* Part 1 */}
                <div className="top-bar hidden-lg-down d-none d-xl-block">
                    <div className="container clearfix">
                        <ul
                            id="menu-top-bar-left"
                            className="nav nav-inline float-start electro-animate-dropdown flip"
                        >
                            <li
                                id="menu-item-5166"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5166"
                            >
                                <a title="Welcome to Worldwide Electronics Store" href="#"
                                >Welcome to Worldwide Electronics Store</a
                                >
                            </li>
                        </ul>
                        <ul
                            id="menu-top-bar-right"
                            className="nav nav-inline float-end electro-animate-dropdown flip"
                        >
                            <li
                                id="menu-item-5167"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5167"
                            >
                                <a title="Store Locator" href="#"
                                ><i className="ec ec-map-pointer"></i>Store Locator</a
                                >
                            </li>
                            <li
                                id="menu-item-5299"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5299"
                            >
                                <a
                                    title="Track Your Order"
                                    href="https://electro.madrasthemes.com/track-your-order/"
                                ><i className="ec ec-transport"></i>Track Your Order</a
                                >
                            </li>
                            <li
                                id="menu-item-5293"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5293"
                            >
                                <a title="Shop" href="https://electro.madrasthemes.com/shop/"
                                ><i className="ec ec-shopping-bag"></i>Shop</a
                                >
                            </li>
                            <li
                                id="menu-item-5294"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5294"
                            >
                                <a
                                    title="My Account"
                                    href="https://electro.madrasthemes.com/my-account/"
                                ><i className="ec ec-user"></i>My Account</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Part 2 */}
                <header id="masthead" className="site-header stick-this header-v4">
                    <div className="container hidden-lg-down d-none d-xl-block">
                        <div className="masthead row align-items-center">
                            <div
                                className="header-logo-area d-flex justify-content-between align-items-center"
                            >
                                <div className="header-site-branding">
                                    <a href="https://electro.madrasthemes.com/" className="header-logo-link">
                                        <svg
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            width="175.748px"
                                            height="42.52px"
                                            viewBox="0 0 175.748 42.52"
                                            enableBackground="new 0 0 175.748 42.52"
                                        >
                                            <ellipse
                                                className="ellipse-bg"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#FDD700"
                                                cx="170.05"
                                                cy="36.341"
                                                rx="5.32"
                                                ry="5.367"
                                            ></ellipse>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#333E48"
                                                d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
    C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
    c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
    c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
    c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
    c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
    c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
    c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
    c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
     M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
    c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
    c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
    c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
    c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
     M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
    c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
    c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
    C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
    C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
    c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
    c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
    c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
    C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
    c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
    c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
    c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
    c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
    c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
    c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
    C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
    c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
    c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
    c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
    c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
    c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="off-canvas-navigation-wrapper">
                                    <div className="off-canvas-navbar-toggle-buttons clearfix">
                                        <button
                                            className="navbar-toggler navbar-toggle-hamburger"
                                            type="button"
                                        >
                                            <i className="ec ec-menu"></i>
                                        </button>
                                        <button className="navbar-toggler navbar-toggle-close" type="button">
                                            <i className="ec ec-close-remove"></i>
                                        </button>
                                    </div>
                                    <div className="off-canvas-navigation light" id="default-oc-header">
                                        <ul id="menu-all-departments-menu" className="nav nav-inline yamm">
                                            <li
                                                id="menu-item-5349"
                                                className="highlight menu-item menu-item-type-post_type menu-item-object-page menu-item-5349"
                                            >
                                                <a
                                                    title="Value of the Day"
                                                    href="https://electro.madrasthemes.com/home-v2/"
                                                >Value of the Day</a
                                                >
                                            </li>
                                            <li
                                                id="menu-item-5350"
                                                className="highlight menu-item menu-item-type-post_type menu-item-object-page menu-item-5350"
                                            >
                                                <a
                                                    title="Top 100 Offers"
                                                    href="https://electro.madrasthemes.com/home-v3/"
                                                >Top 100 Offers</a
                                                >
                                            </li>
                                            <li
                                                id="menu-item-5351"
                                                className="highlight menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2915 current_page_item menu-item-5351 active"
                                            >
                                                <a
                                                    title="New Arrivals"
                                                    href="https://electro.madrasthemes.com/home-v3-full-color-background/"
                                                >New Arrivals</a
                                                >
                                            </li>
                                            <li
                                                id="menu-item-5220"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5220 dropdown"
                                            >
                                                <a
                                                    title="Computers &amp; Accessories"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Computers &amp; Accessories</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5310"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5310"
                                                    >
                                                        <div className="yamm-content">
                                                            <div
                                                                className="vc_row wpb_row vc_row-fluid bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right"
                                                            >
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="460"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-2"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2-300x256.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Computers &amp; Accessories
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >All Computers &amp; Accessories</a
                                                                                            >
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >Laptops, Desktops &amp; Monitors</a
                                                                                            >
                                                                                        </li>
                                                                                        <li><a href="#">Printers &amp; Ink</a></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >Networking &amp; Internet Devices</a
                                                                                            >
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Computer Accessories</a>
                                                                                        </li>
                                                                                        <li><a href="#">Software</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            ><span className="nav-text"
                                                                                            >All Electronics</span
                                                                                                ><span className="nav-subtext"
                                                                                                >Discover more products</span
                                                                                                ></a
                                                                                            >
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Office &amp; Stationery
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >All Office &amp; Stationery</a
                                                                                            >
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5221"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5221 dropdown"
                                            >
                                                <a
                                                    title="Cameras, Audio &amp; Video"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Cameras, Audio &amp; Video</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5309"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5309"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="460"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-3"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3-300x256.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            <a href="#">Cameras &amp; Photography</a>
                                                                                        </li>
                                                                                        <li><a href="#">Lenses</a></li>
                                                                                        <li><a href="#">Camera Accessories</a></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >Security &amp; Surveillance</a
                                                                                            >
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >Binoculars &amp; Telescopes</a
                                                                                            >
                                                                                        </li>
                                                                                        <li><a href="#">Camcorders</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            ><span className="nav-text"
                                                                                            >All Electronics</span
                                                                                                ><span className="nav-subtext"
                                                                                                >Discover more products</span
                                                                                                ></a
                                                                                            >
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Audio &amp; Video</li>
                                                                                        <li>
                                                                                            <a href="#">All Audio &amp; Video</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Headphones &amp; Speakers</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5222"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5222 dropdown"
                                            >
                                                <a
                                                    title="Mobiles &amp; Tablets"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Mobiles &amp; Tablets</a
                                                >
                                                <ul role="menu" className="dropdown-menu bg-yamm-extend">
                                                    <li
                                                        id="menu-item-5311"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5311"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left bg-yamm-extend-outside"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="495"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu--300x275.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Mobiles &amp; Tablets
                                                                                        </li>
                                                                                        <li><a href="#">All Mobile Phones</a></li>
                                                                                        <li><a href="#">Smartphones</a></li>
                                                                                        <li><a href="#">Refurbished Mobiles</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li>
                                                                                            <a href="#">All Mobile Accessories</a>
                                                                                        </li>
                                                                                        <li><a href="#">Cases &amp; Covers</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            ><span className="nav-text"
                                                                                            >All Electronics</span
                                                                                                ><span className="nav-subtext"
                                                                                                >Discover more products</span
                                                                                                ></a
                                                                                            >
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title"></li>
                                                                                        <li><a href="#">All Tablets</a></li>
                                                                                        <li><a href="#">Tablet Accessories</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5223"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5223 dropdown"
                                            >
                                                <a
                                                    title="Movies, Music &amp; Video Games"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Movies, Music &amp; Video Games</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5312"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5312"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="485"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-8"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8-300x269.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Movies &amp; TV Shows
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">All Movies &amp; TV Shows</a>
                                                                                        </li>
                                                                                        <li><a href="#">All English</a></li>
                                                                                        <li><a href="#">All Hindi</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li className="nav-title">Video Games</li>
                                                                                        <li><a href="#">PC Games</a></li>
                                                                                        <li><a href="#">Consoles</a></li>
                                                                                        <li><a href="#">Accessories</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Music</li>
                                                                                        <li><a href="#">All Music</a></li>
                                                                                        <li><a href="#">Indian Classical</a></li>
                                                                                        <li><a href="#">Musical Instruments</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5226"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5226 dropdown"
                                            >
                                                <a
                                                    title="TV &amp; Audio"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >TV &amp; Audio</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5314"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5314"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="460"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-4"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4-300x256.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Audio &amp; Video</li>
                                                                                        <li>
                                                                                            <a href="#">All Audio &amp; Video</a>
                                                                                        </li>
                                                                                        <li><a href="#">Televisions</a></li>
                                                                                        <li><a href="#">Headphones</a></li>
                                                                                        <li><a href="#">Speakers</a></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            >Audio &amp; Video Accessories</a
                                                                                            >
                                                                                        </li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li>
                                                                                            <a href="#"
                                                                                            ><span className="nav-text"
                                                                                            >Electro Home Appliances</span
                                                                                                ><span className="nav-subtext"
                                                                                                >Available in select cities</span
                                                                                                ></a
                                                                                            >
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Music</li>
                                                                                        <li><a href="#">Televisions</a></li>
                                                                                        <li><a href="#">Headphones</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5224"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5224 dropdown"
                                            >
                                                <a
                                                    title="Watches &amp; Eyewear"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Watches &amp; Eyewear</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5313"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5313"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="486"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-7"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7-300x270.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Watches</li>
                                                                                        <li><a href="#">All Watches</a></li>
                                                                                        <li><a href="#">Men's Watches</a></li>
                                                                                        <li><a href="#">Women's Watches</a></li>
                                                                                        <li><a href="#">Premium Watches</a></li>
                                                                                        <li><a href="#">Deals on Watches</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">Eyewear</li>
                                                                                        <li><a href="#">Men's Sunglasses</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5225"
                                                className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225 dropdown"
                                            >
                                                <a
                                                    title="Car, Motorbike &amp; Industrial"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Car, Motorbike &amp; Industrial</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5315"
                                                        className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5315"
                                                    >
                                                        <div className="yamm-content">
                                                            <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                                <div
                                                                    className="wpb_column vc_column_container vc_col-sm-12"
                                                                >
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div
                                                                                className="wpb_single_image wpb_content_element vc_align_left"
                                                                            >
                                                                                <figure className="wpb_wrapper vc_figure">
                                                                                    <div
                                                                                        className="vc_single_image-wrapper vc_box_border_grey"
                                                                                    >
                                                                                        <img
                                                                                            loading="lazy"
                                                                                            width="540"
                                                                                            height="523"
                                                                                            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9.png"
                                                                                            className="vc_single_image-img attachment-full"
                                                                                            alt=""
                                                                                            title="megamenu-9"
                                                                                            decoding="async"
                                                                                            srcSet="
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9.png         540w,
                                        https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9-300x291.png 300w
                                      "
                                                                                            sizes="(max-width: 540px) 100vw, 540px"
                                                                                        />
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Car &amp; Motorbike
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">All Cars &amp; Bikes</a>
                                                                                        </li>
                                                                                        <li><a href="#">Car &amp; Bike Care</a></li>
                                                                                        <li><a href="#">Lubricants</a></li>
                                                                                        <li className="nav-divider"></li>
                                                                                        <li className="nav-title">Shop for Bike</li>
                                                                                        <li>
                                                                                            <a href="#">Helmets &amp; Gloves</a>
                                                                                        </li>
                                                                                        <li><a href="#">Bike Parts</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="wpb_text_column wpb_content_element">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li className="nav-title">
                                                                                            Industrial Supplies
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">All Industrial Supplies</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Lab &amp; Scientific</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-5227"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 dropdown"
                                            >
                                                <a
                                                    title="Accessories"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                    aria-haspopup="true"
                                                >Accessories</a
                                                >
                                                <ul role="menu" className="dropdown-menu">
                                                    <li
                                                        id="menu-item-5228"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5228"
                                                    >
                                                        <a title="Cases" href="#">Cases</a>
                                                    </li>
                                                    <li
                                                        id="menu-item-5229"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5229"
                                                    >
                                                        <a title="Chargers" href="#">Chargers</a>
                                                    </li>
                                                    <li
                                                        id="menu-item-5230"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5230"
                                                    >
                                                        <a title="Headphone Accessories" href="#"
                                                        >Headphone Accessories</a
                                                        >
                                                    </li>
                                                    <li
                                                        id="menu-item-5231"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5231"
                                                    >
                                                        <a title="Headphone Cases" href="#">Headphone Cases</a>
                                                    </li>
                                                    <li
                                                        id="menu-item-5232"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5232"
                                                    >
                                                        <a title="Headphones" href="#">Headphones</a>
                                                    </li>
                                                    <li
                                                        id="menu-item-5233"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233"
                                                    >
                                                        <a title="Computer Accessories" href="#"
                                                        >Computer Accessories</a
                                                        >
                                                    </li>
                                                    <li
                                                        id="menu-item-5234"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5234"
                                                    >
                                                        <a title="Laptop Accessories" href="#"
                                                        >Laptop Accessories</a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <form
                                className="navbar-search col"
                                method="get"
                                action="https://electro.madrasthemes.com/"
                                autoComplete="off"
                            >
                                <label className="sr-only screen-reader-text visually-hidden" htmlFor="search"
                                >Search for:</label
                                >
                                <div className="input-group">
                                    <div className="input-search-field">
                                        <input
                                            type="text"
                                            id="search"
                                            className="form-control search-field product-search-field"
                                            dir="ltr"
                                            name="s"
                                            placeholder="Search for Products"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="input-group-addon search-categories d-flex">
                                        <select
                                            name="product_cat"
                                            id="electro_header_search_categories_dropdown"
                                            className="postform resizeselect"
                                        >
                                            <option value="0">All Categories</option>
                                            <option className="level-0" value="accessories">Accessories</option>
                                            <option className="level-0" value="cameras-photography">
                                                Cameras &amp; Photography
                                            </option>
                                            <option className="level-0" value="computer-components">
                                                Computer Components
                                            </option>
                                            <option className="level-0" value="gadgets">Gadgets</option>
                                            <option className="level-0" value="home-entertainment">
                                                Home Entertainment
                                            </option>
                                            <option className="level-0" value="laptops-computers">
                                                Laptops &amp; Computers
                                            </option>
                                            <option className="level-0" value="printers-ink">
                                                Printers &amp; Ink
                                            </option>
                                            <option className="level-0" value="smart-phones-tablets">
                                                Smart Phones &amp; Tablets
                                            </option>
                                            <option className="level-0" value="tv-audio">TV &amp; Audio</option>
                                            <option className="level-0" value="video-games-consoles">
                                                Video Games &amp; Consoles
                                            </option>
                                            <option className="level-0" value="a-stereo">Stereo</option>
                                            <option className="level-0" value="b-home-theatre">
                                                Home Theatre
                                            </option>
                                            <option className="level-0" value="c-bluetooth-speakers">
                                                Bluetooth Speakers
                                            </option>
                                            <option className="level-0" value="headphones-2">Headphones</option>
                                            <option className="level-0" value="speakers-2">Speakers</option>
                                        </select>
                                    </div>
                                    <div className="input-group-btn">
                                        <input
                                            type="hidden"
                                            id="search-param"
                                            name="post_type"
                                        />
                                        <button type="submit" className="btn btn-secondary">
                                            <i className="ec ec-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div
                                className="header-icons col-auto d-flex justify-content-end align-items-center"
                            >
                                <div
                                    className="header-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-title="Compare"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <a href="https://electro.madrasthemes.com/compare/">
                                        <i className="ec ec-compare"></i>
                                    </a>
                                </div>
                                <div
                                    className="header-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-title="Wishlist"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <a href="https://electro.madrasthemes.com/wishlist/">
                                        <i className="ec ec-favorites"></i>
                                    </a>
                                </div>
                                <div
                                    className="header-icon header-icon__user-account dropdown animate-dropdown"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-title="My Account"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <a
                                        className="dropdown-toggle"
                                        href="https://electro.madrasthemes.com/my-account/"
                                        data-bs-toggle="dropdown"
                                    ><i className="ec ec-user"></i
                                    ></a>
                                    <ul className="dropdown-menu dropdown-menu-user-account">
                                        <li>
                                            <div className="register-sign-in-dropdown-inner">
                                                <div className="sign-in">
                                                    <p>Returning Customer ?</p>
                                                    <div className="sign-in-action">
                                                        <a
                                                            href="https://electro.madrasthemes.com/my-account/"
                                                            className="sign-in-button"
                                                        >Sign in</a
                                                        >
                                                    </div>
                                                </div>
                                                <div className="register">
                                                    <p>Don't have an account ?</p>
                                                    <div className="register-action">
                                                        <a href="https://electro.madrasthemes.com/my-account/"
                                                        >Register</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="header-icon header-icon__cart animate-dropdown dropdown"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-title="Cart"
                                    data-bs-original-title=""
                                    title=""
                                >
                                    <a
                                        className="dropdown-toggle"
                                        href="https://electro.madrasthemes.com/cart/"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ec ec-shopping-bag"></i>
                                        <span className="cart-items-count count header-icon-counter">0</span>
                                        <span className="cart-items-total-price total-price"
                                        ><span className="woocommerce-Price-amount amount"
                                        ><bdi
                                        ><span className="woocommerce-Price-currencySymbol">$</span
                                        >0.00</bdi
                                                ></span
                                            ></span
                                        >
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-mini-cart border-bottom-0-last-child"
                                    >
                                        <li>
                                            <div
                                                className="widget_shopping_cart_content border-bottom-0-last-child"
                                            >
                                                <p className="woocommerce-mini-cart__empty-message">
                                                    No products in the cart.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="handheld-header-wrap container hidden-xl-up d-xl-none">
                        <div className="handheld-header-v2 row align-items-center handheld-stick-this">
                            <div className="off-canvas-navigation-wrapper">
                                <div className="off-canvas-navbar-toggle-buttons clearfix">
                                    <button className="navbar-toggler navbar-toggle-hamburger" type="button">
                                        <i className="ec ec-menu"></i>
                                    </button>
                                    <button className="navbar-toggler navbar-toggle-close" type="button">
                                        <i className="ec ec-close-remove"></i>
                                    </button>
                                </div>
                                <div className="off-canvas-navigation light" id="default-oc-header">
                                    <ul id="menu-all-departments-menu-1" className="nav nav-inline yamm">
                                        <li
                                            id="menu-item-5349"
                                            className="highlight menu-item menu-item-type-post_type menu-item-object-page menu-item-5349"
                                        >
                                            <a
                                                title="Value of the Day"
                                                href="https://electro.madrasthemes.com/home-v2/"
                                            >Value of the Day</a
                                            >
                                        </li>
                                        <li
                                            id="menu-item-5350"
                                            className="highlight menu-item menu-item-type-post_type menu-item-object-page menu-item-5350"
                                        >
                                            <a
                                                title="Top 100 Offers"
                                                href="https://electro.madrasthemes.com/home-v3/"
                                            >Top 100 Offers</a
                                            >
                                        </li>
                                        <li
                                            id="menu-item-5351"
                                            className="highlight menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2915 current_page_item menu-item-5351 active"
                                        >
                                            <a
                                                title="New Arrivals"
                                                href="https://electro.madrasthemes.com/home-v3-full-color-background/"
                                            >New Arrivals</a
                                            >
                                        </li>
                                        <li
                                            id="menu-item-5220"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5220 dropdown"
                                        >
                                            <a
                                                title="Computers &amp; Accessories"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Computers &amp; Accessories</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5310"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5310"
                                                >
                                                    <div className="yamm-content">
                                                        <div
                                                            className="vc_row wpb_row vc_row-fluid bg-yamm-content bg-yamm-content-bottom bg-yamm-content-right"
                                                        >
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="460"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-2"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-2-300x256.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">
                                                                                        Computers &amp; Accessories
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        >All Computers &amp; Accessories</a
                                                                                        >
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        >Laptops, Desktops &amp; Monitors</a
                                                                                        >
                                                                                    </li>
                                                                                    <li><a href="#">Printers &amp; Ink</a></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        >Networking &amp; Internet Devices</a
                                                                                        >
                                                                                    </li>
                                                                                    <li><a href="#">Computer Accessories</a></li>
                                                                                    <li><a href="#">Software</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        ><span className="nav-text"
                                                                                        >All Electronics</span
                                                                                            ><span className="nav-subtext"
                                                                                            >Discover more products</span
                                                                                            ></a
                                                                                        >
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">
                                                                                        Office &amp; Stationery
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">All Office &amp; Stationery</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5221"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5221 dropdown"
                                        >
                                            <a
                                                title="Cameras, Audio &amp; Video"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Cameras, Audio &amp; Video</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5309"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5309"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="460"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-3"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-3-300x256.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">
                                                                                        <a href="#">Cameras &amp; Photography</a>
                                                                                    </li>
                                                                                    <li><a href="#">Lenses</a></li>
                                                                                    <li><a href="#">Camera Accessories</a></li>
                                                                                    <li>
                                                                                        <a href="#">Security &amp; Surveillance</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">Binoculars &amp; Telescopes</a>
                                                                                    </li>
                                                                                    <li><a href="#">Camcorders</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        ><span className="nav-text"
                                                                                        >All Electronics</span
                                                                                            ><span className="nav-subtext"
                                                                                            >Discover more products</span
                                                                                            ></a
                                                                                        >
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Audio &amp; Video</li>
                                                                                    <li><a href="#">All Audio &amp; Video</a></li>
                                                                                    <li>
                                                                                        <a href="#">Headphones &amp; Speakers</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5222"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5222 dropdown"
                                        >
                                            <a
                                                title="Mobiles &amp; Tablets"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Mobiles &amp; Tablets</a
                                            >
                                            <ul role="menu" className="dropdown-menu bg-yamm-extend">
                                                <li
                                                    id="menu-item-5311"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5311"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left bg-yamm-extend-outside"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="495"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu--300x275.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">
                                                                                        Mobiles &amp; Tablets
                                                                                    </li>
                                                                                    <li><a href="#">All Mobile Phones</a></li>
                                                                                    <li><a href="#">Smartphones</a></li>
                                                                                    <li><a href="#">Refurbished Mobiles</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li>
                                                                                        <a href="#">All Mobile Accessories</a>
                                                                                    </li>
                                                                                    <li><a href="#">Cases &amp; Covers</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        ><span className="nav-text"
                                                                                        >All Electronics</span
                                                                                            ><span className="nav-subtext"
                                                                                            >Discover more products</span
                                                                                            ></a
                                                                                        >
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title"></li>
                                                                                    <li><a href="#">All Tablets</a></li>
                                                                                    <li><a href="#">Tablet Accessories</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5223"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5223 dropdown"
                                        >
                                            <a
                                                title="Movies, Music &amp; Video Games"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Movies, Music &amp; Video Games</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5312"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5312"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="485"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-8"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-8-300x269.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">
                                                                                        Movies &amp; TV Shows
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">All Movies &amp; TV Shows</a>
                                                                                    </li>
                                                                                    <li><a href="#">All English</a></li>
                                                                                    <li><a href="#">All Hindi</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li className="nav-title">Video Games</li>
                                                                                    <li><a href="#">PC Games</a></li>
                                                                                    <li><a href="#">Consoles</a></li>
                                                                                    <li><a href="#">Accessories</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Music</li>
                                                                                    <li><a href="#">All Music</a></li>
                                                                                    <li><a href="#">Indian Classical</a></li>
                                                                                    <li><a href="#">Musical Instruments</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5226"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5226 dropdown"
                                        >
                                            <a
                                                title="TV &amp; Audio"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >TV &amp; Audio</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5314"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5314"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="460"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-4"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-4-300x256.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Audio &amp; Video</li>
                                                                                    <li><a href="#">All Audio &amp; Video</a></li>
                                                                                    <li><a href="#">Televisions</a></li>
                                                                                    <li><a href="#">Headphones</a></li>
                                                                                    <li><a href="#">Speakers</a></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        >Audio &amp; Video Accessories</a
                                                                                        >
                                                                                    </li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li>
                                                                                        <a href="#"
                                                                                        ><span className="nav-text"
                                                                                        >Electro Home Appliances</span
                                                                                            ><span className="nav-subtext"
                                                                                            >Available in select cities</span
                                                                                            ></a
                                                                                        >
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Music</li>
                                                                                    <li><a href="#">Televisions</a></li>
                                                                                    <li><a href="#">Headphones</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5224"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5224 dropdown"
                                        >
                                            <a
                                                title="Watches &amp; Eyewear"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Watches &amp; Eyewear</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5313"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5313"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="486"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-7"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-7-300x270.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Watches</li>
                                                                                    <li><a href="#">All Watches</a></li>
                                                                                    <li><a href="#">Men's Watches</a></li>
                                                                                    <li><a href="#">Women's Watches</a></li>
                                                                                    <li><a href="#">Premium Watches</a></li>
                                                                                    <li><a href="#">Deals on Watches</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Eyewear</li>
                                                                                    <li><a href="#">Men's Sunglasses</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5225"
                                            className="yamm-tfw menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225 dropdown"
                                        >
                                            <a
                                                title="Car, Motorbike &amp; Industrial"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Car, Motorbike &amp; Industrial</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5315"
                                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5315"
                                                >
                                                    <div className="yamm-content">
                                                        <div className="vc_row wpb_row vc_row-fluid bg-yamm-content">
                                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left"
                                                                        >
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper vc_box_border_grey"
                                                                                >
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        width="540"
                                                                                        height="523"
                                                                                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9.png"
                                                                                        className="vc_single_image-img attachment-full"
                                                                                        alt=""
                                                                                        title="megamenu-9"
                                                                                        decoding="async"
                                                                                        srcSet="
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9.png         540w,
                                      https://electro.madrasthemes.com/wp-content/uploads/2016/03/megamenu-9-300x291.png 300w
                                    "
                                                                                        sizes="(max-width: 540px) 100vw, 540px"
                                                                                    />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_row wpb_row vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Car &amp; Motorbike</li>
                                                                                    <li><a href="#">All Cars &amp; Bikes</a></li>
                                                                                    <li><a href="#">Car &amp; Bike Care</a></li>
                                                                                    <li><a href="#">Lubricants</a></li>
                                                                                    <li className="nav-divider"></li>
                                                                                    <li className="nav-title">Shop for Bike</li>
                                                                                    <li><a href="#">Helmets &amp; Gloves</a></li>
                                                                                    <li><a href="#">Bike Parts</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div className="wpb_text_column wpb_content_element">
                                                                            <div className="wpb_wrapper">
                                                                                <ul>
                                                                                    <li className="nav-title">Industrial Supplies</li>
                                                                                    <li>
                                                                                        <a href="#">All Industrial Supplies</a>
                                                                                    </li>
                                                                                    <li><a href="#">Lab &amp; Scientific</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            id="menu-item-5227"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 dropdown"
                                        >
                                            <a
                                                title="Accessories"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                                aria-haspopup="true"
                                            >Accessories</a
                                            >
                                            <ul role="menu" className="dropdown-menu">
                                                <li
                                                    id="menu-item-5228"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5228"
                                                >
                                                    <a title="Cases" href="#">Cases</a>
                                                </li>
                                                <li
                                                    id="menu-item-5229"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5229"
                                                >
                                                    <a title="Chargers" href="#">Chargers</a>
                                                </li>
                                                <li
                                                    id="menu-item-5230"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5230"
                                                >
                                                    <a title="Headphone Accessories" href="#"
                                                    >Headphone Accessories</a
                                                    >
                                                </li>
                                                <li
                                                    id="menu-item-5231"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5231"
                                                >
                                                    <a title="Headphone Cases" href="#">Headphone Cases</a>
                                                </li>
                                                <li
                                                    id="menu-item-5232"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5232"
                                                >
                                                    <a title="Headphones" href="#">Headphones</a>
                                                </li>
                                                <li
                                                    id="menu-item-5233"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233"
                                                >
                                                    <a title="Computer Accessories" href="#"
                                                    >Computer Accessories</a
                                                    >
                                                </li>
                                                <li
                                                    id="menu-item-5234"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5234"
                                                >
                                                    <a title="Laptop Accessories" href="#">Laptop Accessories</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-logo">
                                <a href="https://electro.madrasthemes.com/" className="header-logo-link">
                                    <svg
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="175.748px"
                                        height="42.52px"
                                        viewBox="0 0 175.748 42.52"
                                        enableBackground="new 0 0 175.748 42.52"
                                    >
                                        <ellipse
                                            className="ellipse-bg"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="#FDD700"
                                            cx="170.05"
                                            cy="36.341"
                                            rx="5.32"
                                            ry="5.367"
                                        ></ellipse>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="#333E48"
                                            d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
    C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
    c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
    c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
    c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
    c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
    c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
    c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
    c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
     M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
    c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
    c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
    c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
    c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
     M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
    c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
    c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
    C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
    C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
    c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
    c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
    c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
    C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
    c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
    c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
    c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
    c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
    c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
    c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
    C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
    c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
    c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
    c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
    c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
    c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="handheld-header-links">
                                <ul className="columns-3">
                                    <li className="search">
                                        <a href="">Search</a>
                                        <div className="site-search">
                                            <div className="widget woocommerce widget_product_search">
                                                <form
                                                    role="search"
                                                    method="get"
                                                    className="woocommerce-product-search"
                                                    action="https://electro.madrasthemes.com/"
                                                >
                                                    <label
                                                        className="screen-reader-text"
                                                        htmlFor="woocommerce-product-search-field-0"
                                                    >Search for:</label
                                                    >
                                                    <input
                                                        type="search"
                                                        id="woocommerce-product-search-field-0"
                                                        className="search-field"
                                                        placeholder="Search products…"
                                                        name="s"
                                                    />
                                                    <button type="submit" value="Search" className="">Search</button>
                                                    <input type="hidden" name="post_type" />
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="my-account">
                                        <a href="https://electro.madrasthemes.com/my-account/"
                                        ><i className="ec ec-user"></i
                                        ></a>
                                    </li>
                                    <li className="cart">
                                        <a
                                            className="footer-cart-contents"
                                            href="https://electro.madrasthemes.com/cart/"
                                            title="View your shopping cart"
                                        >
                                            <i className="ec ec-shopping-bag"></i>
                                            <span className="cart-items-count count">0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Part 3 */}

            </div>
            {/* Start */}
            <div>
                <section>
                    <BannerCarousel />
                </section>
                <section className="px-20">
                    <div className="da-block justify-content-between flex-nowrap align-items-stretch overflow-auto row row-cols-md-2 row-cols-xl-4">
                        <div className="da">
                            <div className="da-inner p-3 position-relative">
                                <a className="da-media d-flex stretched-link" href="https://electro.madrasthemes.com/shop/">
                                    <div className="da-media-left me-3"><img loading="lazy" width="410" height="281" src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-2.png" className="attachment-full size-full" alt="" /></div>
                                    <div className="da-media-body">
                                        <div className="da-text">
                                            Catch Hottest <strong>Deals</strong> in Cameras Category </div>
                                        <div className="da-action">
                                            Shop now </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="da">
                            <div className="da-inner p-3 position-relative">
                                <a className="da-media d-flex stretched-link" href="https://electro.madrasthemes.com/shop/">
                                    <div className="da-media-left me-3"><img loading="lazy" width="400" height="272" src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/Desktop-2.png" className="attachment-full size-full" alt="" /></div>
                                    <div className="da-media-body">
                                        <div className="da-text">
                                            the new <strong>360 cameras</strong> </div>
                                        <div className="da-action">
                                            <span className="from"><span className="prefix">From</span><span className="value"><sup>$</sup>749</span><span className="suffix">99</span></span> </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="da">
                            <div className="da-inner p-3 position-relative">
                                <a className="da-media d-flex stretched-link" href="https://electro.madrasthemes.com/shop/">
                                    <div className="da-media-left me-3"><img loading="lazy" width="410" height="281" src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop-2.png" className="attachment-full size-full" alt="" /></div>
                                    <div className="da-media-body">
                                        <div className="da-text">
                                            Tablets, Smartphones <strong>and more</strong> </div>
                                        <div className="da-action">
                                            <span className="upto"><span className="prefix">Upto</span><span className="value">70</span><span className="suffix">%</span> </span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="da">
                            <div className="da-inner p-3 position-relative">
                                <a className="da-media d-flex stretched-link" href="https://electro.madrasthemes.com/shop/">
                                    <div className="da-media-left me-3"><img loading="lazy" width="410" height="281" src="https://electro.madrasthemes.com/wp-content/uploads/2018/10/360-camers.png" className="attachment-full size-full" alt="" /></div>
                                    <div className="da-media-body">
                                        <div className="da-text">
                                            the new <strong>360 cameras</strong> </div>
                                        <div className="da-action">
                                            <span className="upto"><span className="prefix">Upto</span><span className="value">70</span><span className="suffix">%</span> </span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-20">
                    <div className="features-list clearfix row row-cols-lg-5">
                        <div className="feature">
                            <div className="media">
                                <div className="media-left media-middle feature-icon">
                                    <i className="ec ec-transport"></i>
                                </div>
                                <div className="media-body media-middle feature-text">
                                    <strong>Free Delivery</strong> from $50 </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="media">
                                <div className="media-left media-middle feature-icon">
                                    <i className="ec ec-customers"></i>
                                </div>
                                <div className="media-body media-middle feature-text">
                                    <strong>99% Positive</strong> Feedbacks </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="media">
                                <div className="media-left media-middle feature-icon">
                                    <i className="ec ec-returning"></i>
                                </div>
                                <div className="media-body media-middle feature-text">
                                    <strong>365 days</strong> for free return </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="media">
                                <div className="media-left media-middle feature-icon">
                                    <i className="ec ec-payment"></i>
                                </div>
                                <div className="media-body media-middle feature-text">
                                    <strong>Payment</strong> Secure System </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="media">
                                <div className="media-left media-middle feature-icon">
                                    <i className="ec ec-tag"></i>
                                </div>
                                <div className="media-body media-middle feature-text">
                                    <strong>Only Best</strong> Brands </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-20">
                    <ProductCollection/>
                </section>
                <section className="products-carousel-tabs px-20 animate-in-view fadeIn animated" data-animation="fadeIn">
                    <h2 className="sr-only">Product Carousel Tabs</h2>
                    <ul className="nav nav-inline text-xs-left">
                        <li className="nav-item">
                            <a className="nav-link active" href="#tab-products-1" data-bs-toggle="tab">
                                Featured </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab-products-2" data-bs-toggle="tab">
                                On Sale </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab-products-3" data-bs-toggle="tab">
                                Top Rated </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        
                    </div>
                </section>
            </div>
        </div>
    )
}