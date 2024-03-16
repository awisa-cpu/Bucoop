import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"
import {About} from "./About/src/About"
import {ContactUs} from "./ContactUs/src/ContactUs"
import ReactDOM from "react-dom/client";
import "./style.css";
import "./animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
import NavBar from "./NavBar";
export const Home = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div">
      <div className="landing-page-1-333822 pos-abs" id="id-37554">
        <div className="hero-section-1-76560 pos-abs" id="id-112">
          <div className="main-bg-1-118296 pos-abs" id="id-1131">
            <div
              className="nodeBg-1131 pos-abs image-div bg-no-repeat  bg-crop"
              id="id-bg-1131"
            >
              {" "}
            </div>
          </div>
          <div className="design-1-502178 pos-abs" id="id-1757">
            <div className="star-2-1-33960 pos-abs" id="id-1755"></div>
            <div className="star-3-1-154524 pos-abs" id="id-1756"></div>
            <div className="star-1-1-101880 pos-abs" id="id-1754"></div>
          </div>
          <div className="bg-1-227336 pos-abs" id="id-1145">
            <div className="side-bg-1-803701 pos-abs" id="id-1144"></div>
            <div className="side-bg-2-148896 pos-abs" id="id-1142">
              <div
                className="nodeBg-1142 pos-abs image-div bg-no-repeat fill-parent bg-cover"
                id="id-bg-1142"
              >
                {" "}
              </div>
            </div>
          </div>
          <div className="hero-details-1-182138 pos-abs" id="id-1753">
            <div className="empowering-your-1-817 pos-abs" id="id-1746">
              <span className="empowering-your-1-817-0">
                {"Empowering Your Financial "} <br /> {" Journey Together"}
              </span>
            </div>
            <div className="join-a-communit-1-0 pos-abs" id="id-1747">
              <span className="join-a-communit-1-0-0">
                {
                  "Join a community dedicated to mutual growth and financial empowerment. "
                }{" "}
                <br /> &nbsp;{"Discover how we can achieve more, together."}
              </span>
            </div>
            <div className="button-1-422196 pos-abs" id="id-1748">
              <div className="join-us-1-124468 pos-abs" id="id-1749">
                <span className="join-us-1-124468-0">{"Join Us"}</span>
              </div>
            </div>
          </div>
          <div className="header-1-396048 pos-abs" id="id-1752">
            <div className="logo-1-453726 pos-abs" id="id-113">
              <div
                className="nodeBg-113 pos-abs image-div bg-no-repeat fill-parent bg-cover"
                id="id-bg-113"
              >
                {" "}
              </div>
            </div>
            <div className="button-1-218770 pos-abs" id="id-118">
              <div className="register-1-71808 pos-abs" id="id-117">
                <span className="register-1-71808-0">{"Register"}</span>
              </div>
            </div>
            {/* <Router>
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                </Routes>
            </Router> */}
            <div className="nav-links-1-17271 pos-abs" id="id-119">
              <div className="home-1-350100 pos-abs" id="id-114">
                <span className="home-1-350100-0">{"Home"}</span>
              </div>
              <div className="about-us-1-236350 pos-abs" id="id-115">
                <span className="about-us-1-236350-0">{"About Us"}</span>
              </div>
              <div className="contact-us-1-524797 pos-abs" id="id-116">
                <span className="contact-us-1-524797-0">{"Contact Us"}</span>
              </div>
            </div>
          </div>
          <div className="disc-1-169330 pos-abs" id="id-42595">
            <div className="group-88-1-419957 pos-abs" id="id-42596">
              <div className="ellipse-36-1-149112 pos-abs" id="id-42597"></div>
              <div className="ellipse-36-2-67550 pos-abs" id="id-42598"></div>
              <div className="ellipse-36-3-21340 pos-abs" id="id-42599"></div>
              <div className="ellipse-36-4-491228 pos-abs" id="id-42600"></div>
              <div className="ellipse-36-5-116348 pos-abs" id="id-42601"></div>
              <div className="ellipse-36-6-58400 pos-abs" id="id-42602"></div>
              <div className="ellipse-36-7-199660 pos-abs" id="id-42603"></div>
              <div className="ellipse-36-8-161816 pos-abs" id="id-42604"></div>
              <div className="ellipse-36-9-98100 pos-abs" id="id-42605"></div>
              <div className="ellipse-36-10-40685 pos-abs" id="id-42606"></div>
              <div className="ellipse-36-11-23722 pos-abs" id="id-42607"></div>
            </div>
            <div className="group-94-1-112514 pos-abs" id="id-42608">
              <div className="ellipse-36-1-55380 pos-abs" id="id-42609"></div>
              <div className="ellipse-36-2-676767 pos-abs" id="id-42610"></div>
              <div className="ellipse-36-3-126664 pos-abs" id="id-42611"></div>
              <div className="ellipse-36-4-420210 pos-abs" id="id-42612"></div>
              <div className="ellipse-36-5-26460 pos-abs" id="id-42613"></div>
              <div className="ellipse-36-6-206190 pos-abs" id="id-42614"></div>
              <div className="ellipse-36-7-2120 pos-abs" id="id-42615"></div>
              <div className="ellipse-36-8-681600 pos-abs" id="id-42616"></div>
              <div className="ellipse-36-9-529098 pos-abs" id="id-42617"></div>
              <div className="ellipse-36-10-8424 pos-abs" id="id-42618"></div>
              <div className="ellipse-36-11-89325 pos-abs" id="id-42619"></div>
            </div>
            <div className="group-90-1-142912 pos-abs" id="id-42620">
              <div className="ellipse-36-1-47337 pos-abs" id="id-42621"></div>
              <div className="ellipse-36-2-245088 pos-abs" id="id-42622"></div>
              <div className="ellipse-36-3-629104 pos-abs" id="id-42623"></div>
              <div className="ellipse-36-4-518992 pos-abs" id="id-42624"></div>
              <div className="ellipse-36-5-713024 pos-abs" id="id-42625"></div>
              <div className="ellipse-36-6-224840 pos-abs" id="id-42626"></div>
              <div className="ellipse-36-7-248750 pos-abs" id="id-42627"></div>
              <div className="ellipse-36-8-34615 pos-abs" id="id-42628"></div>
              <div className="ellipse-36-9-65208 pos-abs" id="id-42629"></div>
              <div className="ellipse-36-10-47633 pos-abs" id="id-42630"></div>
              <div className="ellipse-36-11-94363 pos-abs" id="id-42631"></div>
            </div>
            <div className="group-95-1-214720 pos-abs" id="id-42632">
              <div className="ellipse-36-1-578460 pos-abs" id="id-42633"></div>
              <div className="ellipse-36-2-417359 pos-abs" id="id-42634"></div>
              <div className="ellipse-36-3-37260 pos-abs" id="id-42635"></div>
              <div className="ellipse-36-4-167800 pos-abs" id="id-42636"></div>
              <div className="ellipse-36-5-31892 pos-abs" id="id-42637"></div>
              <div className="ellipse-36-6-252390 pos-abs" id="id-42638"></div>
              <div className="ellipse-36-7-57330 pos-abs" id="id-42639"></div>
              <div className="ellipse-36-8-61992 pos-abs" id="id-42640"></div>
              <div className="ellipse-36-9-541346 pos-abs" id="id-42641"></div>
              <div className="ellipse-36-10-79629 pos-abs" id="id-42642"></div>
              <div className="ellipse-36-11-51015 pos-abs" id="id-42643"></div>
            </div>
            <div className="group-101-1-131880 pos-abs" id="id-42644">
              <div className="ellipse-36-1-113050 pos-abs" id="id-42645"></div>
              <div className="ellipse-36-2-179974 pos-abs" id="id-42646"></div>
              <div className="ellipse-36-3-279465 pos-abs" id="id-42647"></div>
              <div className="ellipse-36-4-56880 pos-abs" id="id-42648"></div>
              <div className="ellipse-36-5-676767 pos-abs" id="id-42649"></div>
              <div className="ellipse-36-6-725718 pos-abs" id="id-42650"></div>
              <div className="ellipse-36-7-56942 pos-abs" id="id-42651"></div>
              <div className="ellipse-36-8-408177 pos-abs" id="id-42652"></div>
              <div className="ellipse-36-9-285940 pos-abs" id="id-42653"></div>
              <div className="ellipse-36-10-179170 pos-abs" id="id-42654"></div>
              <div className="ellipse-36-11-197184 pos-abs" id="id-42655"></div>
            </div>
            <div className="group-89-1-312915 pos-abs" id="id-42656">
              <div className="ellipse-36-1-88624 pos-abs" id="id-42657"></div>
              <div className="ellipse-36-2-4641 pos-abs" id="id-42658"></div>
              <div className="ellipse-36-3-43848 pos-abs" id="id-42659"></div>
              <div className="ellipse-36-4-162432 pos-abs" id="id-42660"></div>
              <div className="ellipse-36-5-134168 pos-abs" id="id-42661"></div>
              <div className="ellipse-36-6-694342 pos-abs" id="id-42662"></div>
              <div className="ellipse-36-7-113240 pos-abs" id="id-42663"></div>
              <div className="ellipse-36-8-128830 pos-abs" id="id-42664"></div>
              <div className="ellipse-36-9-2940 pos-abs" id="id-42665"></div>
              <div className="ellipse-36-10-456660 pos-abs" id="id-42666"></div>
              <div className="ellipse-36-11-12921 pos-abs" id="id-42667"></div>
            </div>
            <div className="group-96-1-248200 pos-abs" id="id-42668">
              <div className="ellipse-36-1-28782 pos-abs" id="id-42669"></div>
              <div className="ellipse-36-2-6336 pos-abs" id="id-42670"></div>
              <div className="ellipse-36-3-291824 pos-abs" id="id-42671"></div>
              <div className="ellipse-36-4-23920 pos-abs" id="id-42672"></div>
              <div className="ellipse-36-5-463485 pos-abs" id="id-42673"></div>
              <div className="ellipse-36-6-209588 pos-abs" id="id-42674"></div>
              <div className="ellipse-36-7-91476 pos-abs" id="id-42675"></div>
              <div className="ellipse-36-8-555180 pos-abs" id="id-42676"></div>
              <div className="ellipse-36-9-223641 pos-abs" id="id-42677"></div>
              <div className="ellipse-36-10-86756 pos-abs" id="id-42678"></div>
              <div className="ellipse-36-11-494676 pos-abs" id="id-42679"></div>
            </div>
            <div className="group-91-1-573924 pos-abs" id="id-42680">
              <div className="ellipse-36-1-30870 pos-abs" id="id-42681"></div>
              <div className="ellipse-36-2-204010 pos-abs" id="id-42682"></div>
              <div className="ellipse-36-3-764940 pos-abs" id="id-42683"></div>
              <div className="ellipse-36-4-347256 pos-abs" id="id-42684"></div>
              <div className="ellipse-36-5-352112 pos-abs" id="id-42685"></div>
              <div className="ellipse-36-6-136563 pos-abs" id="id-42686"></div>
              <div className="ellipse-36-7-117612 pos-abs" id="id-42687"></div>
              <div className="ellipse-36-8-195822 pos-abs" id="id-42688"></div>
              <div className="ellipse-36-9-10758 pos-abs" id="id-42689"></div>
              <div className="ellipse-36-10-303952 pos-abs" id="id-42690"></div>
              <div className="ellipse-36-11-56871 pos-abs" id="id-42691"></div>
            </div>
            <div className="group-97-1-100386 pos-abs" id="id-42692">
              <div className="ellipse-36-1-92787 pos-abs" id="id-42693"></div>
              <div className="ellipse-36-2-73840 pos-abs" id="id-42694"></div>
              <div className="ellipse-36-3-131614 pos-abs" id="id-42695"></div>
              <div className="ellipse-36-4-794682 pos-abs" id="id-42696"></div>
              <div className="ellipse-36-5-153660 pos-abs" id="id-42697"></div>
              <div className="ellipse-36-6-58681 pos-abs" id="id-42698"></div>
              <div className="ellipse-36-7-605631 pos-abs" id="id-42699"></div>
              <div className="ellipse-36-8-48716 pos-abs" id="id-42700"></div>
              <div className="ellipse-36-9-94170 pos-abs" id="id-42701"></div>
              <div className="ellipse-36-10-245250 pos-abs" id="id-42702"></div>
              <div className="ellipse-36-11-275040 pos-abs" id="id-42703"></div>
            </div>
            <div className="group-105-1-237800 pos-abs" id="id-42704">
              <div className="ellipse-36-1-679716 pos-abs" id="id-42705"></div>
              <div className="ellipse-36-2-138040 pos-abs" id="id-42706"></div>
              <div className="ellipse-36-3-126846 pos-abs" id="id-42707"></div>
              <div className="ellipse-36-4-161113 pos-abs" id="id-42708"></div>
              <div className="ellipse-36-5-187408 pos-abs" id="id-42709"></div>
              <div className="ellipse-36-6-9308 pos-abs" id="id-42710"></div>
              <div className="ellipse-36-7-2988 pos-abs" id="id-42711"></div>
              <div className="ellipse-36-8-408370 pos-abs" id="id-42712"></div>
              <div className="ellipse-36-9-210677 pos-abs" id="id-42713"></div>
              <div className="ellipse-36-10-841857 pos-abs" id="id-42714"></div>
              <div className="ellipse-36-11-312767 pos-abs" id="id-42715"></div>
            </div>
          </div>
        </div>
        <div className="footer-1-536550 pos-abs" id="id-37417">
          <div className="design-1-330 pos-abs" id="id-41566">
            <div className="star-2-1-103124 pos-abs" id="id-41567"></div>
            <div className="star-3-1-1932 pos-abs" id="id-41568"></div>
            <div className="star-1-1-212908 pos-abs" id="id-41569"></div>
          </div>
          <div className="design-2-239481 pos-abs" id="id-41570">
            <div className="star-2-1-102600 pos-abs" id="id-41571"></div>
            <div className="star-3-1-203424 pos-abs" id="id-41572"></div>
            <div className="star-1-1-639527 pos-abs" id="id-41573"></div>
          </div>
          <div className="image-1-40257 pos-abs" id="id-41565">
            <div className="bg-1-411324 pos-abs" id="id-37561"></div>
            <div className="main-bg-1-205668 pos-abs" id="id-37560">
              <div
                className="nodeBg-37560 pos-abs image-div bg-no-repeat fill-parent bg-cover"
                id="id-bg-37560"
              >
                {" "}
              </div>
            </div>
          </div>
          <div className="about-details-1-188944 pos-abs" id="id-37555">
            <div className="why-choose-us-1-320812 pos-abs" id="id-37556">
              <span className="why-choose-us-1-320812-0">
                {"Why Choose Us"}
              </span>
            </div>
            <div className="choosing-bucoop-1-269748 pos-abs" id="id-37557">
              <span className="choosing-bucoop-1-269748-0">{"Choosing "}</span>
              <span className="choosing-bucoop-1-269748-1">{"BUCOOP"}</span>
              <span className="choosing-bucoop-1-269748-2">
                {
                  " means opting for a partner that understands the unique challenges and opportunities within cooperative societies. Our system is not just a tool; it's a solution designed to meet the nuanced needs of our clients, ensuring that managing a cooperative society is both effective and hassle-free. "
                }{" "}
                <br />{" "}
              </span>
            </div>
            <div className="button-1-284488 pos-abs" id="id-37558">
              <div className="join-us-1-36975 pos-abs" id="id-37559">
                <span className="join-us-1-36975-0">{"Join Us"}</span>
              </div>
            </div>
          </div>
          <div className="disc-1-227994 pos-abs" id="id-42716">
            <div className="group-88-1-186694 pos-abs" id="id-42717">
              <div className="ellipse-36-1-99760 pos-abs" id="id-42718"></div>
              <div className="ellipse-36-2-110526 pos-abs" id="id-42719"></div>
              <div className="ellipse-36-3-20700 pos-abs" id="id-42720"></div>
              <div className="ellipse-36-4-647426 pos-abs" id="id-42721"></div>
              <div className="ellipse-36-5-861184 pos-abs" id="id-42722"></div>
              <div className="ellipse-36-6-303750 pos-abs" id="id-42723"></div>
              <div className="ellipse-36-7-204450 pos-abs" id="id-42724"></div>
              <div className="ellipse-36-8-109344 pos-abs" id="id-42725"></div>
              <div className="ellipse-36-9-71340 pos-abs" id="id-42726"></div>
              <div className="ellipse-36-10-11256 pos-abs" id="id-42727"></div>
              <div className="ellipse-36-11-41538 pos-abs" id="id-42728"></div>
            </div>
            <div className="group-94-1-1904 pos-abs" id="id-42729">
              <div className="ellipse-36-1-15930 pos-abs" id="id-42730"></div>
              <div className="ellipse-36-2-156320 pos-abs" id="id-42731"></div>
              <div className="ellipse-36-3-592132 pos-abs" id="id-42732"></div>
              <div className="ellipse-36-4-217350 pos-abs" id="id-42733"></div>
              <div className="ellipse-36-5-798 pos-abs" id="id-42734"></div>
              <div className="ellipse-36-6-311610 pos-abs" id="id-42735"></div>
              <div className="ellipse-36-7-56434 pos-abs" id="id-42736"></div>
              <div className="ellipse-36-8-57018 pos-abs" id="id-42737"></div>
              <div className="ellipse-36-9-99057 pos-abs" id="id-42738"></div>
              <div className="ellipse-36-10-1808 pos-abs" id="id-42739"></div>
              <div className="ellipse-36-11-433077 pos-abs" id="id-42740"></div>
            </div>
            <div className="group-90-1-52528 pos-abs" id="id-42741">
              <div className="ellipse-36-1-40680 pos-abs" id="id-42742"></div>
              <div className="ellipse-36-2-113883 pos-abs" id="id-42743"></div>
              <div className="ellipse-36-3-1683 pos-abs" id="id-42744"></div>
              <div className="ellipse-36-4-361231 pos-abs" id="id-42745"></div>
              <div className="ellipse-36-5-374104 pos-abs" id="id-42746"></div>
              <div className="ellipse-36-6-107206 pos-abs" id="id-42747"></div>
              <div className="ellipse-36-7-81796 pos-abs" id="id-42748"></div>
              <div className="ellipse-36-8-115056 pos-abs" id="id-42749"></div>
              <div className="ellipse-36-9-233376 pos-abs" id="id-42750"></div>
              <div className="ellipse-36-10-180950 pos-abs" id="id-42751"></div>
              <div className="ellipse-36-11-444465 pos-abs" id="id-42752"></div>
            </div>
            <div className="group-95-1-484561 pos-abs" id="id-42753">
              <div className="ellipse-36-1-584440 pos-abs" id="id-42754"></div>
              <div className="ellipse-36-2-202120 pos-abs" id="id-42755"></div>
              <div className="ellipse-36-3-368510 pos-abs" id="id-42756"></div>
              <div className="ellipse-36-4-330033 pos-abs" id="id-42757"></div>
              <div className="ellipse-36-5-704160 pos-abs" id="id-42758"></div>
              <div className="ellipse-36-6-56980 pos-abs" id="id-42759"></div>
              <div className="ellipse-36-7-118327 pos-abs" id="id-42760"></div>
              <div className="ellipse-36-8-332262 pos-abs" id="id-42761"></div>
              <div className="ellipse-36-9-69552 pos-abs" id="id-42762"></div>
              <div className="ellipse-36-10-63438 pos-abs" id="id-42763"></div>
              <div className="ellipse-36-11-65728 pos-abs" id="id-42764"></div>
            </div>
            <div className="group-101-1-5984 pos-abs" id="id-42765">
              <div className="ellipse-36-1-271945 pos-abs" id="id-42766"></div>
              <div className="ellipse-36-2-202356 pos-abs" id="id-42767"></div>
              <div className="ellipse-36-3-524790 pos-abs" id="id-42768"></div>
              <div className="ellipse-36-4-130665 pos-abs" id="id-42769"></div>
              <div className="ellipse-36-5-9384 pos-abs" id="id-42770"></div>
              <div className="ellipse-36-6-140778 pos-abs" id="id-42771"></div>
              <div className="ellipse-36-7-745920 pos-abs" id="id-42772"></div>
              <div className="ellipse-36-8-335610 pos-abs" id="id-42773"></div>
              <div className="ellipse-36-9-73140 pos-abs" id="id-42774"></div>
              <div className="ellipse-36-10-775884 pos-abs" id="id-42775"></div>
              <div className="ellipse-36-11-45210 pos-abs" id="id-42776"></div>
            </div>
            <div className="group-89-1-324445 pos-abs" id="id-42777">
              <div className="ellipse-36-1-33350 pos-abs" id="id-42778"></div>
              <div className="ellipse-36-2-167573 pos-abs" id="id-42779"></div>
              <div className="ellipse-36-3-75072 pos-abs" id="id-42780"></div>
              <div className="ellipse-36-4-73280 pos-abs" id="id-42781"></div>
              <div className="ellipse-36-5-273910 pos-abs" id="id-42782"></div>
              <div className="ellipse-36-6-352400 pos-abs" id="id-42783"></div>
              <div className="ellipse-36-7-103200 pos-abs" id="id-42784"></div>
              <div className="ellipse-36-8-256120 pos-abs" id="id-42785"></div>
              <div className="ellipse-36-9-208512 pos-abs" id="id-42786"></div>
              <div className="ellipse-36-10-120285 pos-abs" id="id-42787"></div>
              <div className="ellipse-36-11-23660 pos-abs" id="id-42788"></div>
            </div>
            <div className="group-96-1-10180 pos-abs" id="id-42789">
              <div className="ellipse-36-1-448945 pos-abs" id="id-42790"></div>
              <div className="ellipse-36-2-107679 pos-abs" id="id-42791"></div>
              <div className="ellipse-36-3-468384 pos-abs" id="id-42792"></div>
              <div className="ellipse-36-4-222144 pos-abs" id="id-42793"></div>
              <div className="ellipse-36-5-26176 pos-abs" id="id-42794"></div>
              <div className="ellipse-36-6-286032 pos-abs" id="id-42795"></div>
              <div className="ellipse-36-7-648397 pos-abs" id="id-42796"></div>
              <div className="ellipse-36-8-160703 pos-abs" id="id-42797"></div>
              <div className="ellipse-36-9-379140 pos-abs" id="id-42798"></div>
              <div className="ellipse-36-10-31304 pos-abs" id="id-42799"></div>
              <div className="ellipse-36-11-279378 pos-abs" id="id-42800"></div>
            </div>
            <div className="group-91-1-278749 pos-abs" id="id-42801">
              <div className="ellipse-36-1-525888 pos-abs" id="id-42802"></div>
              <div className="ellipse-36-2-440125 pos-abs" id="id-42803"></div>
              <div className="ellipse-36-3-243500 pos-abs" id="id-42804"></div>
              <div className="ellipse-36-4-25688 pos-abs" id="id-42805"></div>
              <div className="ellipse-36-5-278216 pos-abs" id="id-42806"></div>
              <div className="ellipse-36-6-713710 pos-abs" id="id-42807"></div>
              <div className="ellipse-36-7-628933 pos-abs" id="id-42808"></div>
              <div className="ellipse-36-8-726744 pos-abs" id="id-42809"></div>
              <div className="ellipse-36-9-267325 pos-abs" id="id-42810"></div>
              <div className="ellipse-36-10-865774 pos-abs" id="id-42811"></div>
              <div className="ellipse-36-11-216832 pos-abs" id="id-42812"></div>
            </div>
            <div className="group-97-1-110670 pos-abs" id="id-42813">
              <div className="ellipse-36-1-84846 pos-abs" id="id-42814"></div>
              <div className="ellipse-36-2-320508 pos-abs" id="id-42815"></div>
              <div className="ellipse-36-3-226125 pos-abs" id="id-42816"></div>
              <div className="ellipse-36-4-382536 pos-abs" id="id-42817"></div>
              <div className="ellipse-36-5-324316 pos-abs" id="id-42818"></div>
              <div className="ellipse-36-6-17885 pos-abs" id="id-42819"></div>
              <div className="ellipse-36-7-431868 pos-abs" id="id-42820"></div>
              <div className="ellipse-36-8-199080 pos-abs" id="id-42821"></div>
              <div className="ellipse-36-9-155700 pos-abs" id="id-42822"></div>
              <div className="ellipse-36-10-827604 pos-abs" id="id-42823"></div>
              <div className="ellipse-36-11-674969 pos-abs" id="id-42824"></div>
            </div>
            <div className="group-105-1-247257 pos-abs" id="id-42825">
              <div className="ellipse-36-1-65871 pos-abs" id="id-42826"></div>
              <div className="ellipse-36-2-460272 pos-abs" id="id-42827"></div>
              <div className="ellipse-36-3-162282 pos-abs" id="id-42828"></div>
              <div className="ellipse-36-4-77616 pos-abs" id="id-42829"></div>
              <div className="ellipse-36-5-118770 pos-abs" id="id-42830"></div>
              <div className="ellipse-36-6-36828 pos-abs" id="id-42831"></div>
              <div className="ellipse-36-7-683936 pos-abs" id="id-42832"></div>
              <div className="ellipse-36-8-289044 pos-abs" id="id-42833"></div>
              <div className="ellipse-36-9-279801 pos-abs" id="id-42834"></div>
              <div className="ellipse-36-10-95760 pos-abs" id="id-42835"></div>
              <div className="ellipse-36-11-236158 pos-abs" id="id-42836"></div>
            </div>
          </div>
        </div>
        <div className="faqs-1-780934 pos-abs" id="id-31311">
          <div className="faqs-1-33286 pos-abs" id="id-31370">
            <span className="faqs-1-33286-0">{"FAQs"}</span>
          </div>
          <div className="faq-2-1-260325 pos-abs" id="id-31321">
            <div className="details-1-405548 pos-abs" id="id-31322">
              <div className="answer-2-1-5875 pos-abs" id="id-31328">
                <div className="h4-1-238503 pos-abs" id="id-31329">
                  <span className="h4-1-238503-0">
                    {
                      "Members are eligible to apply for loans after a brief waiting period, allowing us to ensure a foundation of mutual trust and contribution."
                    }
                  </span>
                </div>
              </div>
              <div className="question-2-1-119680 pos-abs" id="id-31323">
                <div className="add-1-325480 pos-abs" id="id-31327"></div>
                <div className="text-1-378162 pos-abs" id="id-31411">
                  <div className="c-02-1-13965 pos-abs" id="id-31324">
                    <span className="c-02-1-13965-0">{"02"}</span>
                  </div>
                  <div
                    className="can-i-apply-for-1-105957 pos-abs"
                    id="id-31325"
                  >
                    <span className="can-i-apply-for-1-105957-0">
                      {"Can I apply for a loan immediately after joining?"}
                    </span>
                  </div>
                </div>
                <div className="reduce-1-70231-container pos-abs" id="id-31326">
                  <div className="reduce-1-14994 pos-abs" id="id-31326">
                    <div
                      className="component-2-1-3128 pos-abs"
                      id="id-I31326_5021289"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-1-1-128856 pos-abs" id="id-31312">
            <div className="details-1-22650 pos-abs" id="id-31313">
              <div className="answer-1-1-241280 pos-abs" id="id-31319">
                <div className="h4-1-274834 pos-abs" id="id-31320">
                  <span className="h4-1-274834-0">
                    {
                      "Joining is simple! Complete the online membership form, and once approved, you'll receive your unique member ID to access our range of services."
                    }
                  </span>
                </div>
              </div>
              <div className="question-1-1-313845 pos-abs" id="id-31314">
                <div className="reduce-1-760215 pos-abs" id="id-31318"></div>
                <div className="text-1-73656 pos-abs" id="id-31412">
                  <div className="c-01-1-19176 pos-abs" id="id-31315">
                    <span className="c-01-1-19176-0">{"01"}</span>
                  </div>
                  <div
                    className="how-do-i-join-b-1-401166 pos-abs"
                    id="id-31316"
                  >
                    <span className="how-do-i-join-b-1-401166-0">
                      {"How do I join BUCOOP?"}
                    </span>
                  </div>
                </div>
                <div className="add-1-37584-container pos-abs" id="id-31317">
                  <div className="add-1-453990 pos-abs" id="id-31317">
                    <div
                      className="component-2-1-18232 pos-abs"
                      id="id-I31317_5021265"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-3-1-350595 pos-abs" id="id-31330">
            <div className="details-1-785832 pos-abs" id="id-31331">
              <div className="answer-3-1-132765 pos-abs" id="id-31338">
                <div className="h4-1-463500 pos-abs" id="id-31339">
                  <span className="h4-1-463500-0">
                    {
                      "Members enjoy benefits like access to exclusive loan rates, flexible contribution plans, and auto-generated reports to track financial growth."
                    }
                  </span>
                </div>
              </div>
              <div className="question-3-1-332280 pos-abs" id="id-31332">
                <div className="reduce-1-567552 pos-abs" id="id-31335"></div>
                <div className="add-1-670677 pos-abs" id="id-31337"></div>
                <div className="text-1-433203 pos-abs" id="id-31413">
                  <div className="c-03-1-299250 pos-abs" id="id-31333">
                    <span className="c-03-1-299250-0">{"03"}</span>
                  </div>
                  <div
                    className="what-are-the-be-1-43230 pos-abs"
                    id="id-31334"
                  >
                    <span className="what-are-the-be-1-43230-0">
                      {"What are the benefits of BUCOOP membership?"}
                    </span>
                  </div>
                </div>
                <div className="add-2-16984-container pos-abs" id="id-31336">
                  <div className="add-1-447525 pos-abs" id="id-31336">
                    <div
                      className="component-2-1-506538 pos-abs"
                      id="id-I31336_5021265"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-4-1-128100 pos-abs" id="id-31340">
            <div className="details-1-643136 pos-abs" id="id-31341">
              <div className="answer-4-1-702750 pos-abs" id="id-31348">
                <div className="h4-1-143152 pos-abs" id="id-31349">
                  <span className="h4-1-143152-0">
                    {
                      "Loan applications undergo a thorough review by our account officers and payroll managers, ensuring fairness and transparency in the approval process."
                    }
                  </span>
                </div>
              </div>
              <div className="question-4-1-473770 pos-abs" id="id-31342">
                <div className="reduce-1-382659 pos-abs" id="id-31345"></div>
                <div className="add-1-232704 pos-abs" id="id-31347"></div>
                <div className="text-1-106795 pos-abs" id="id-31414">
                  <div className="c-04-1-190390 pos-abs" id="id-31343">
                    <span className="c-04-1-190390-0">{"04"}</span>
                  </div>
                  <div
                    className="how-are-loan-ap-1-12103 pos-abs"
                    id="id-31344"
                  >
                    <span className="how-are-loan-ap-1-12103-0">
                      {"How are loan applications reviewed and approved?"}
                    </span>
                  </div>
                </div>
                <div className="add-2-7840-container pos-abs" id="id-31346">
                  <div className="add-1-174848 pos-abs" id="id-31346">
                    <div
                      className="component-2-1-532148 pos-abs"
                      id="id-I31346_5021265"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-6-1-496468 pos-abs" id="id-31350">
            <div className="details-1-144362 pos-abs" id="id-31351">
              <div className="answer-6-1-59928 pos-abs" id="id-31358">
                <div className="h4-1-23919 pos-abs" id="id-31359">
                  <span className="h4-1-23919-0">
                    {
                      "Members can request account termination via their dashboard. Our team will guide you through the process and any necessary financial settlements."
                    }
                  </span>
                </div>
              </div>
              <div className="question-6-1-429218 pos-abs" id="id-31352">
                <div className="reduce-1-625217 pos-abs" id="id-31355"></div>
                <div className="add-1-235457 pos-abs" id="id-31357"></div>
                <div className="text-1-239642 pos-abs" id="id-31416">
                  <div className="c-06-1-304775 pos-abs" id="id-31353">
                    <span className="c-06-1-304775-0">{"06"}</span>
                  </div>
                  <div
                    className="what-happens-if-1-508800 pos-abs"
                    id="id-31354"
                  >
                    <span className="what-happens-if-1-508800-0">
                      {"What happens if I want to terminate my membership?"}
                    </span>
                  </div>
                </div>
                <div className="add-2-197780-container pos-abs" id="id-31356">
                  <div className="add-1-254466 pos-abs" id="id-31356">
                    <div
                      className="component-2-1-413440 pos-abs"
                      id="id-I31356_5021265"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-5-1-244400 pos-abs" id="id-31360">
            <div className="details-1-632008 pos-abs" id="id-31361">
              <div className="answer-5-1-58261 pos-abs" id="id-31368">
                <div className="h4-1-2436 pos-abs" id="id-31369">
                  <span className="h4-1-2436-0">
                    {
                      "Absolutely! You can modify your contribution amount anytime through your dashboard, with changes reflecting from the next contribution cycle"
                    }
                  </span>
                </div>
              </div>
              <div className="question-5-1-422100 pos-abs" id="id-31362">
                <div className="reduce-1-6900 pos-abs" id="id-31365"></div>
                <div className="add-1-85654 pos-abs" id="id-31367"></div>
                <div className="text-1-99550 pos-abs" id="id-31415">
                  <div className="c-05-1-305424 pos-abs" id="id-31363">
                    <span className="c-05-1-305424-0">{"05"}</span>
                  </div>
                  <div
                    className="is-there-a-way--1-495222 pos-abs"
                    id="id-31364"
                  >
                    <span className="is-there-a-way--1-495222-0">
                      {"Is there a way to increase my monthly contributions?"}
                    </span>
                  </div>
                </div>
                <div className="add-2-193440-container pos-abs" id="id-31366">
                  <div className="add-1-119790 pos-abs" id="id-31366">
                    <div
                      className="component-2-1-761851 pos-abs"
                      id="id-I31366_5021265"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="core-functions-1-43785 pos-abs" id="id-1958">
          <div className="core-function-1-395026 pos-abs" id="id-248">
            <span className="core-function-1-395026-0">{"Core Function"}</span>
          </div>
          <div className="frame-1-62016 pos-abs" id="id-42574">
            <div className="group-1-228811 pos-abs" id="id-42575">
              <div className="vector-1-190854 pos-abs" id="id-42576">
                <div
                  className="nodeBg-42576 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                  id="id-bg-42576"
                ></div>
              </div>
              <div className="vector-2-10724 pos-abs" id="id-42577">
                <div
                  className="nodeBg-42577 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                  id="id-bg-42577"
                ></div>
              </div>
            </div>
          </div>
          <div className="frame-2-314931 pos-abs" id="id-42578">
            <div className="group-1-398520 pos-abs" id="id-42579">
              <div className="vector-1-59096 pos-abs" id="id-42580">
                <div
                  className="nodeBg-42580 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                  id="id-bg-42580"
                ></div>
              </div>
              <div className="vector-2-60367 pos-abs" id="id-42581">
                <div
                  className="nodeBg-42581 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                  id="id-bg-42581"
                ></div>
              </div>
            </div>
          </div>
          <div className="core-funtions-1-92635 pos-abs" id="id-31410">
            <div className="function-2-1-179151 pos-abs" id="id-31398">
              <div className="bg-1-19872 pos-abs" id="id-31399"></div>
              <div className="bank-building-1-109140 pos-abs" id="id-31401">
                <div
                  className="nodeBg-31401 pos-abs image-div bg-no-repeat fill-parent bg-contain"
                  id="id-bg-31401"
                >
                  {" "}
                </div>
              </div>
              <div className="loan-applicatio-1-218550 pos-abs" id="id-31400">
                <span className="loan-applicatio-1-218550-0">
                  {"Loan Application Management"}
                </span>
              </div>
            </div>
            <div className="function-4-1-810785 pos-abs" id="id-31402">
              <div className="bg-1-13450 pos-abs" id="id-31403"></div>
              <div className="graph-report-1-48720 pos-abs" id="id-31405">
                <div
                  className="nodeBg-31405 pos-abs image-div bg-no-repeat fill-parent bg-contain"
                  id="id-bg-31405"
                >
                  {" "}
                </div>
              </div>
              <div className="report-autogene-1-120423 pos-abs" id="id-31404">
                <span className="report-autogene-1-120423-0">
                  {"Report Auto-Generation"}
                </span>
              </div>
            </div>
            <div className="function-3-1-12144 pos-abs" id="id-31406">
              <div className="bg-1-407164 pos-abs" id="id-31407"></div>
              <div className="donate-1-458380 pos-abs" id="id-31409">
                <div
                  className="nodeBg-31409 pos-abs image-div bg-no-repeat fill-parent bg-contain"
                  id="id-bg-31409"
                >
                  {" "}
                </div>
              </div>
              <div className="contribution-ma-1-631267 pos-abs" id="id-31408">
                <span className="contribution-ma-1-631267-0">
                  {"Contribution Management"}
                </span>
              </div>
            </div>
            <div className="function-1-1-330964 pos-abs" id="id-31393">
              <div className="bg-1-399470 pos-abs" id="id-31394"></div>
              <div className="membership-enro-1-155320 pos-abs" id="id-31397">
                <span className="membership-enro-1-155320-0">
                  {"Membership Enrollment"}
                </span>
              </div>
              <div className="elgroup-1-640338 pos-abs" id="id-31395">
                <div className="vector-1-77855 pos-abs" id="id-31396">
                  <div
                    className="nodeBg-31396 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-31396"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2-118490 pos-abs" id="id-37506">
          <div className="line-8-1-14964 pos-abs" id="id-37553"></div>
          <div className="c-2019-apcom-all--1-14880 pos-abs" id="id-37508">
            <span className="c-2019-apcom-all--1-14880-0">
              {"© 2024 BUCOOP. All Rights Reserved. "}
            </span>
          </div>
          <div className="footer-details-1-51528 pos-abs" id="id-37519">
            <div className="babcock-coopera-1-31248 pos-abs" id="id-37523">
              <span className="babcock-coopera-1-31248-0">
                {
                  "Babcock Cooperative Management System (BUCOOP) champions mutual financial growth through collaborative savings and loans"
                }
              </span>
            </div>
            <div className="icons-1-60928 pos-abs" id="id-37524">
              <div className="div-1-483120 pos-abs" id="id-37525">
                <span className="div-1-483120-0">{""}</span>
              </div>
              <div className="div-1-149838 pos-abs" id="id-37526">
                <span className="div-1-149838-0">{""}</span>
              </div>
              <div className="div-1-62608 pos-abs" id="id-37527">
                <span className="div-1-62608-0">{""}</span>
              </div>
              <div className="div-1-726604 pos-abs" id="id-37528">
                <span className="div-1-726604-0">{""}</span>
              </div>
            </div>
            <div className="logo-1-21431 pos-abs" id="id-37520">
              <div className="logo-1-584741 pos-abs" id="id-37562">
                <div
                  className="nodeBg-37562 pos-abs image-div bg-no-repeat fill-parent bg-cover"
                  id="id-bg-37562"
                >
                  {" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flaming-disc-1-162679 pos-abs" id="id-37509">
            <div className="circle-bg-1-272238 pos-abs" id="id-37518"></div>
            <div className="lines-1-259720 pos-abs" id="id-37510">
              <div className="line-3-1-171162 pos-abs" id="id-37511"></div>
              <div className="line-4-1-21710 pos-abs" id="id-37512"></div>
              <div className="line-2-1-25144 pos-abs" id="id-37513"></div>
              <div className="line-1-1-215500 pos-abs" id="id-37514"></div>
              <div className="line-5-1-139083 pos-abs" id="id-37515"></div>
              <div className="line-6-1-29032 pos-abs" id="id-37516"></div>
              <div className="line-7-1-154 pos-abs" id="id-37517"></div>
            </div>
          </div>
          <div className="company-1-468120 pos-abs" id="id-37529">
            <div className="company-1-45756 pos-abs" id="id-37534">
              <span className="company-1-45756-0">{"Company"}</span>
            </div>
            <div className="nav-links-1-30780 pos-abs" id="id-37530">
              <div className="home-1-42731 pos-abs" id="id-37531">
                <span className="home-1-42731-0">{"Home"}</span>
              </div>
              <div className="about-us-1-341256 pos-abs" id="id-37532">
                <span className="about-us-1-341256-0">{"About Us"}</span>
              </div>
              <div className="contact-us-1-34640 pos-abs" id="id-37533">
                <span className="contact-us-1-34640-0">{"Contact Us"}</span>
              </div>
            </div>
          </div>
          <div className="company-2-120528 pos-abs" id="id-37535">
            <div className="services-1-353864 pos-abs" id="id-37540">
              <span className="services-1-353864-0">{"Services"}</span>
            </div>
            <div className="nav-links-1-128180 pos-abs" id="id-37536">
              <div className="faqs-1-21465 pos-abs" id="id-37537">
                <span className="faqs-1-21465-0">{"FAQs"}</span>
              </div>
              <div className="terms-of-servic-1-810306 pos-abs" id="id-37538">
                <span className="terms-of-servic-1-810306-0">
                  {"Terms of Service"}
                </span>
              </div>
              <div className="privacy-policy-1-597228 pos-abs" id="id-37539">
                <span className="privacy-policy-1-597228-0">
                  {"Privacy Policy"}
                </span>
              </div>
            </div>
          </div>
          <div className="newsletter-1-24960 pos-abs" id="id-37541">
            <div className="join-the-newsle-1-67512 pos-abs" id="id-37542">
              <span className="join-the-newsle-1-67512-0">
                {"Join the Newsletter"}
              </span>
            </div>
            <div className="button-1-4340 pos-abs" id="id-37563">
              <div className="join-us-1-542102 pos-abs" id="id-37564">
                <span className="join-us-1-542102-0">{"Join Us"}</span>
              </div>
            </div>
            <div className="email-address-1-326920 pos-abs" id="id-37547">
              <div className="email-address-1-78840 pos-abs" id="id-37548">
                <span className="email-address-1-78840-0">
                  {"Email Address"}
                </span>
              </div>
              <div className="email-1-5376 pos-abs" id="id-37549">
                <div className="enter-your-emai-1-107787 pos-abs" id="id-37552">
                  <span className="enter-your-emai-1-107787-0">
                    {"Enter your email"}
                  </span>
                </div>
                <div className="icsharpemail-1-77280 pos-abs" id="id-471430">
                  <div className="vector-1-384744 pos-abs" id="id-471431">
                    <div
                      className="nodeBg-471431 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                      id="id-bg-471431"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<Home />);
