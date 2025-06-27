import React from "react";
import ProjectCard from "./ProjectsCard";
import sql from "../../Assets/sql-b-icon.png";
import powerBi from "../../Assets/power-bi-icon.png";
import excel from "../../Assets/excel.svg";
import python from "../../Assets/python.svg";


// Import images
import CurrencyConverterImg from "../../Assets/CurrencyConverter.jpeg";
import CurrencyConverterImg1 from "../../Assets/CurrencyConverter.jpeg";
import CurrencyConverterImg2 from "../../Assets/CurrencyConverter.jpeg";
import salesreport from "../../Assets/sales&finance_report.png";
import salesreportbanner from "../../Assets/exxcel-(1).webp";
import sqlbanner from "../../Assets/sql545.png";
// import business from "../../Assets/power600.png";
import power from "../../Assets/power600-(1).png";
// import power from "../../Assets/BI 360.png";
import bi360Home from "../../Assets/bi360.png";
import financeview from "../../Assets/Finance view.png";
import salesview from "../../Assets/Sales View.png";
import Marketingview from "../../Assets/Marketing view.png";
import datamodel from "../../Assets/BI_360_data_model.png";

import PasswordGeneratorImg from "../../Assets/passwordGenrator.jpeg";
import PasswordGeneratorImg1 from "../../Assets/passwordGenrator.jpeg";
import PasswordGeneratorImg2 from "../../Assets/passwordGenrator.jpeg";

import AmazonUiCloneImg from "../../Assets/AmazonUiClone.jpeg";

import JSProjectsListImg from "../../Assets/JSProjectsList.jpeg";

const projects = [
  {
    title: "Business insights 360",
    main: "Developed an interactive Power BI dashboard to analyze AtliQ Hardware's global sales trends using data from Excel and SQL sources. Built a clean data model, optimized DAX calculations with DAX Studio, and delivered key insights that supported a projected 10% revenue increase and 20% reduction in data processing costs.",
    LinkedIn_link: "https://www.linkedin.com/posts/rohitkamble6458_business-insights-360-activity-7344319646432489472-K67n?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaXON8Bl36ynYfSgHDBLOvQT_5P1KXMXKM",
    Github:
      "https://github.com/Rohitkamble6458/Sales-and-Financial-Report",
    bannerImg: power,
    projectImages: [bi360Home,financeview,salesview,Marketingview,datamodel],
    projectCaptions : [
    "Business insights 360",
    "Finance View",
    "Sales View",
    "Marketing View",
    "Data Modeling (SnowFlake Schema)",
  ],
    powerBiEmbedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNGVmNWRhM2EtYjc5Ny00NWI1LTllZjItMjRjMmUwY2YyZTIxIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    powerBILink: "",
    badgeText: "Power Bi project",
    badgeIcon: powerBi,
    projectDetails: `This project, which combines Power BI, SQL, and Excel, centers around addressing operational issues at AtliQ Hardware, a prominent global consumer electronics company. The company's heavy reliance on Excel for data analysis has led to significant losses in some regions. To rectify this, senior management aims to initiate a data analytics project, leveraging data from the previous year to enhance performance and drive improvements.
💼Finance View: shows profit and loss statement like GM,NP,NS etc. and performance over time chart w.r.t to key metrices.
📣Sales View: Shows customers and product performance , unit economics and performance matrix by NS and GM%
📣 Marketing View: Shows region and product performance , unit economics and performance matrix by NS and GM%
🚚 Supply Chain View: shows forecast accuracy, Net Error, trends and key metrices by customers and product.
👨‍🎓 Executive View: shows market share of competitors, trends,revenue by division and channel, top 5 customer`,
  },
  {
    title: "Sales and financial Report",
    main: "In this project, I created a sales report using Excel pivot tables to help businesses find effective customer discounts, improve negotiations, and spot growth opportunities in new countries. The report offers insights to optimize strategies, boost satisfaction, and increase revenue",
    LinkedIn_link: "https://www.linkedin.com/posts/rohitkamble6458_atliq-salesfinancereport-activity-7340713884166647809-HS82?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaXON8Bl36ynYfSgHDBLOvQT_5P1KXMXKM",
    GitHub_link:
      "https://github.com/Rohitkamble6458/Sales-and-Financial-Report",
    bannerImg: salesreportbanner,
    projectImages: [salesreport],
    badgeText: "Excel project",
    badgeBgColor :"#22c55e",
    badgeIcon: excel,
    projectDetails: `Analyzed AtliQ Hardware’s sales performance from 2019 to 2021, supporting strategic decision-making.

Key insights include:

- Implemented ETL processes to streamline data handling.
- Efficiently cleaned data using Power Query Editor.
- Established data relationships with Power Pivot.
- Developed DAX measures for detailed financial and sales analysis.
- Generated comprehensive P&L statements and sales performance reports using pivot tables.

Sales highlights:

- Top-selling product: 'AQ Electron 4 3600 Desktop Processor' with $19.35M in sales.
- Introduction of 16 new products in 2021 contributed to $176.16M in sales.
- Highest sales recorded in India, USA, and South Korea.

The detailed report provided valuable insights that facilitated data-driven decisions to enhance growth and efficiency.`,
  },
  {
    title: "Music Store Analysis ",
    main: "This project is a hands-on SQL case study using a digital music store database to analyze employee roles, customer behavior, track sales trends, and genre popularity. The project is executed using PostgreSQL, and provides a practical understanding of real-world data relationships and business questions.",
    LinkedIn_link:
      "https://github.com/Rohitkamble6458/Music_store_Data_Analysis/blob/main/music_store_analysis.sql",
    GitHub_link:
      "https://github.com/Rohitkamble6458/Music_store_Data_Analysis",
    bannerImg: sqlbanner,
    projectImages: [sqlbanner, sqlbanner],
    projectCaptions : [
    "Dashboard overview showing key metrics",
    "User interface with interactive components"
  ],
    badgeBgColor :"#57A1EB",
    badgeText: "SQL project",
    badgeIcon: sql,
    projectDetails: `Here's what I learned:

Pivot Tables
Power Query
Basic DAX
Conditional Formatting
Advanced Excel formulas (VLOOKUP, XLOOKUP, INDEX-MATCH, IF statements)
Report Design
Sales Metrics
Overall, this project equips businesses with the tools and insights to track, analyze, and improve their sales performance. By analyzing sales data, businesses can uncover new opportunities, grow, and remain competitive in a fast-changing market.`,
  },
  {
    title: "Currency Converter",
    main: "A React-based Currency Converter with real-time rates, default USD to INR, featuring state management, props, hooks, and swap functionality.",
    LinkedIn_link: "https://Rohitkamble6458.github.io/CurrencyConverter/",
    GitHub_link: "https://github.com/Rohitkamble6458/CurrencyConverter",
    bannerImg: CurrencyConverterImg,
    projectImages: [CurrencyConverterImg1, CurrencyConverterImg2],
    projectDetails: `
Project Objective:
Build a responsive currency converter app using React.

Key Features:
- USD to INR default conversion.
- Real-time data fetching via public API.
- Swap functionality and clean UI.

Tools:
React.js, REST API, JavaScript

Impact:
Improved understanding of useState, useEffect, and conditional rendering.
    `,
  },
  {
    title: "Password Generator",
    main: "A responsive React-based password generator using hooks like useState, useEffect, and useCallback, with customizable options and a copy-to-clipboard feature.",
    LinkedIn_link: "https://rohitkamble6458.github.io/Password-Generator/",
    GitHub_link: "https://github.com/Rohitkamble6458/Password-Generator",
    bannerImg: PasswordGeneratorImg,
    projectImages: [PasswordGeneratorImg, PasswordGeneratorImg2],

    projectDetails: `
Project Objective:
Generate secure and customizable passwords.

Key Features:
- Character length, symbol, number, and case toggles.
- useCallback optimization.
- Clipboard copy feature.

Tools:
React.js, CSS

Impact:
Solidified use of hooks and form state management.
    `,
  },
  {
    title: "Amazon UI Clone",
    main: "A responsive Amazon homepage replica built with HTML and CSS.",
    LinkedIn_link: "https://rohitkamble6458.github.io/Amazon_UI_clone/",
    GitHub_link: "https://github.com/Rohitkamble6458/Amazon_UI_clone",
    bannerImg: AmazonUiCloneImg,
  },
  {
    title: "Awesome JS_Project",
    main: "A collection of interactive JavaScript projects showcasing DOM manipulation, event handling, and dynamic web features, ideal for learning and practicing front-end development.",
    LinkedIn_link: "https://rohitkamble6458.github.io/Practice-Javascript-project/",
    GitHub_link:
      "https://github.com/Rohitkamble6458/Practice-Javascript-project",
    bannerImg: JSProjectsListImg,
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 sm:pt-12 lg:pt-16 xl:pt-24 pb-8 text-white"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Projects
      </h1>

      {/* Flexible wrap layout - cards flow naturally based on available space */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
