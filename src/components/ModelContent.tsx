import { useState } from "react";

type Paginations = "Business Model" | "Industry Insights" | "Famous Products";

export default function ModelContent() {
  const [activeSection, setActiveSection] =
    useState<Paginations>("Business Model");

  const handleClick = (section: Paginations) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-6">
      <div className="flex flex-row justify-start items-center gap-10">
        <PageChanger
          Page={"Business Model"}
          ActivePage={activeSection}
          handleClickFunction={handleClick}
        />
        <PageChanger
          Page={"Industry Insights"}
          ActivePage={activeSection}
          handleClickFunction={handleClick}
        />
        <PageChanger
          Page={"Famous Products"}
          ActivePage={activeSection}
          handleClickFunction={handleClick}
        />
      </div>
      <div className="pl-5 flex flex-col gap-5 overflow-y-auto h-[70vh]">
        <PageContent Page={activeSection} />
      </div>
    </div>
  );
}

const PageChanger = ({
  Page,
  ActivePage,
  handleClickFunction,
}: {
  Page: Paginations;
  ActivePage: Paginations;
  handleClickFunction: (section: Paginations) => void;
}) => {
  return (
    <div className="flex flex-row gap-1">
      <h1
        className="text-3xl"
        style={{
          visibility: Page === ActivePage ? "visible" : "hidden",
        }}
      >
        *
      </h1>
      <h1
        className={`text-3xl cursor-pointer ${Page === ActivePage ? "opacity-100" : "opacity-35"}`}
        onClick={() => handleClickFunction(Page)}
      >
        {Page}
      </h1>
    </div>
  );
};

const PageContent = ({ Page }: { Page: Paginations }) => {
  switch (Page) {
    case "Business Model":
      return (
        <>
          <div className="flex flex-col gap-2 w-[95%]">
            <h2 className="text-2xl">Value proposition</h2>
            <p className="text-lg">
              SaaS companies provide software solutions to businesses and
              individuals. They offer a wide range of services, from
              productivity tools to customer relationship management software.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Revenue streams</h2>
            <p className="text-lg">
              SaaS companies generate revenue through subscription fees. They
              offer different pricing plans to cater to the needs of different
              customers.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Key resources</h2>
            <p className="text-lg">
              The key resources for a SaaS company are its software developers,
              customer support team, and marketing team.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Key activities</h2>
            <p className="text-lg">
              The key activities for a SaaS company include software
              development, customer support, and marketing.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Customer segments</h2>
            <p className="text-lg">
              SaaS companies target businesses and individuals who need software
              solutions to improve their productivity and efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Cost structure</h2>
            <p className="text-lg">
              The cost structure of a SaaS company includes software development
              costs, customer support costs, and marketing costs.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Channels</h2>
            <p className="text-lg">
              SaaS companies use online channels to reach their customers. They
              offer free trials and demos to attract new customers.
            </p>
          </div>
        </>
      );
    case "Industry Insights":
      return (
        <>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Industry History</h2>
            <p className="text-lg">
              The history of SaaS dates back to the 1960s when IBM and other
              companies started offering software on a subscription basis. The
              concept gained popularity in the 1990s with the rise of the
              internet. In the early 2000s, Salesforce revolutionized the
              industry by offering its CRM software as a service. This paved the
              way for other companies to follow suit and offer their software on
              a subscription basis.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Industry trends</h2>
            <p className="text-lg">
              The SaaS industry is growing rapidly, with new companies entering
              the market every day. The global SaaS market was valued at $158.2
              billion in 2020 and is expected to reach $307.3 billion by 2026,
              growing at a CAGR of 11.7%. The key trends in the industry include
              artificial intelligence, machine learning, and blockchain
              technology. Companies are leveraging these technologies to offer
              more advanced and efficient software solutions. For example,
              Salesforce uses AI to provide predictive analytics, which has
              helped increase sales productivity by 34%. HubSpot integrates
              machine learning to enhance its marketing automation tools,
              resulting in a 50% increase in lead conversion rates.
              Additionally, there is a growing focus on data security and
              privacy, as customers become more aware of the importance of
              protecting their data. Companies like Okta and Auth0 are leading
              the way in providing secure identity management solutions, with
              Okta reporting a 43% year-over-year growth in revenue in 2021.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <h2 className="text-2xl">Industry Future</h2>
            <p className="text-lg">
              The future of SaaS looks bright, with more companies adopting
              cloud-based software solutions. The industry is expected to grow
              at a rapid pace in the coming years. Innovations in artificial
              intelligence and machine learning will drive the development of
              more intelligent and adaptive software. Additionally, the
              integration of blockchain technology will enhance security and
              transparency. As remote work becomes more prevalent, the demand
              for SaaS solutions that facilitate collaboration and productivity
              will continue to rise. Companies that can offer scalable,
              user-friendly, and secure software will lead the market.
            </p>
          </div>
        </>
      );
    case "Famous Products":
      return (
        <div className="flex flex-col gap-4 w-[85%]">
          <h2 className="text-2xl">United States</h2>
          <ul className="list-none text-lg space-y-4">
            <li>
              <strong className="text-xl font-medium">Salesforce:</strong> A
              leading CRM platform offering cloud-based solutions for sales,
              service, marketing, and more.
            </li>
            <li>
              <strong className="text-xl font-medium">HubSpot:</strong> An
              inbound marketing and sales platform providing tools for CRM,
              social media marketing, content management, and more.
            </li>
            <li>
              <strong className="text-xl font-medium">Zoom:</strong> A video
              communication platform offering video conferencing, webinars,
              chat, and other collaboration features.
            </li>
            <li>
              <strong className="text-xl font-medium">Mailchimp:</strong> An
              all-in-one marketing platform offering email marketing,
              automation, landing pages, and more.
            </li>
          </ul>
          <h2 className="text-2xl">Europe</h2>
          <ul className="list-none text-lg space-y-4">
            <li>
              <strong className="text-xl font-medium">Spotify:</strong> A
              digital music streaming service providing access to millions of
              songs, podcasts, and videos.
            </li>
            <li>
              <strong className="text-xl font-medium">
                Wise (formerly TransferWise):
              </strong>
              An online money transfer service offering international money
              transfers at real exchange rates.
            </li>
            <li>
              <strong className="text-xl font-medium">UiPath:</strong> A global
              software company specializing in robotic process automation (RPA).
            </li>
          </ul>
          <h2 className="text-2xl">Asia</h2>
          <ul className="list-none text-lg space-y-4">
            <li>
              <strong className="text-xl font-medium">Alibaba Cloud:</strong> A
              cloud computing platform offering a wide range of services
              including elastic computing, database, storage, networking, and
              security.
            </li>
            <li>
              <strong className="text-xl font-medium">Freshworks:</strong> A
              SaaS company providing customer engagement software for businesses
              of all sizes.
            </li>
            <li>
              <strong className="text-xl font-medium">Zoho:</strong> A suite of
              online business applications including CRM, project management,
              email marketing, and more.
            </li>
          </ul>
        </div>
      );
  }
};
