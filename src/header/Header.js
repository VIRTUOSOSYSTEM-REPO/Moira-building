import React, { Component } from "react";

import Navbar from "reactjs-navbar";
import logo from "../assets/icon/moira.png";
// import Loader from "react-loader-spinner";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs,
  faAnchor,
  faDizzy,
  faAdjust,
  faBell,
  faGhost,
  faFan,
  faCarSide,
  faJedi,
  faLaughBeam,
  faCheese,
  faKey,
  faWater,
} from /*...*/ "@fortawesome/free-solid-svg-icons";

import "reactjs-navbar/dist/index.css";

class Header extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <Navbar
        alt="Moira Building"
        logo={logo}
        // loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "About Us",
            icon: faBookOpen,
            isAuth: true,
            subItems: [
              {
                title: "Our Company",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Careers",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "CSR Policy",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Media",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Gallery",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
            ],
          },
          {
            title: "Products",
            icon: faGlobe,
            isAuth: true,
            subItems: [
              {
                title: "Types",
                icon: faDizzy,
                isAuth: true,
                subItems: [
                  {
                    title: "Sliding",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Windows",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "Doors",
                        icon: faGhost,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Casement",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Windows",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "Doors",
                        icon: faGhost,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Specialities",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Arched",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "Combination",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "Lamination",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "Bay Widow",
                        icon: faGhost,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Premium",
                    icon: faAdjust,
                    isAuth: true,
                  },
                ],
              },
              {
                title: "Series",
                icon: faAnchor,
                isAuth: true,
                subItems: [
                  {
                    title: "Casement Series",
                    icon: faGhost,
                    isAuth: true,
                    subItems: [
                      {
                        title: "1-60 Casement Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "1-39 Casement Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                    ]
                  },
                  {
                    title: "Sliding Series",
                    icon: faGhost,
                    isAuth: true,
                    subItems: [
                      {
                        title: "1-75 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "1-64 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "1-60 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "1-50 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                      {
                        title: "1-44 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                      },
                    ]
                  },
                ]
              },
              {
                title: "Accessories",
                icon: faAnchor,
                isAuth: true,
                subItems: [
                  {
                    title: "Overview",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Complete Sets",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Tilt & slide door hardware",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Tilt & turn window hardware",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "ESPAGNOLETTES & STRIKERS",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Handles",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Hinges & Friction Hinges",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Miscellaneous Parts",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Plastic Parts",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Rollers",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Screw & Fasteners",
                    icon: faGhost,
                    isAuth: true,
                  },
                ]
              },
            ],
          },
          {
            title: "Moira Advantage",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Why NCL MOIRA",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Quality",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Production",
                icon: faWater,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
              {
                title: "Our Network",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Substainability",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
            ],
          },
          {
            title: "Technical",
            icon: faChartPie,
            isAuth: true,
            subItems: [
              {
                title: "Solutions",
                icon: faGhost,
                isAuth: true,
                subItems: [
                  {
                    title: "Hotels",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Offices",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Villas",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Apartments",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Schools",
                    icon: faGhost,
                    isAuth: true,
                  },
                  {
                    title: "Hospitals",
                    icon: faGhost,
                    isAuth: true,
                  },
                ]
              },
              {
                title: "Profile Drawings",
                icon: faGhost,
                isAuth: true,
                subItems: [
                    {
                      title: "Casement Series",
                      icon: faGhost,
                      isAuth: true,
                      subItems: [
                        {
                          title: "1-60 Casement Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                        {
                          title: "1-39 Casement Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                      ]
                    },
                    {
                      title: "Sliding Series",
                      icon: faGhost,
                      isAuth: true,
                      subItems: [
                        {
                          title: "1-75 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                        {
                          title: "1-64 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                        {
                          title: "1-60 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                        {
                          title: "1-50 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                        {
                          title: "1-44 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                        },
                      ]
                    },
                  {
                    title: "All Profiles",
                    icon: faGhost,
                    isAuth: true,
                  },
                ]
              },
            ]
          },
          {
            title: "Careers",
            icon: faChartPie,
            isAuth: true,
          },
          {
            title: "Contact Us",
            icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    );
  }
}
export default Header;
