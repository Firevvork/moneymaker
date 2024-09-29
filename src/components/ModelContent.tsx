import { useState } from "react";

type Paginations = "Business Model" | "Industry Insights" | "Famous Products";

export default function ModelContent({
  BusinessModel,
  IndustryInsights,
  FamousProducts,
}: {
  BusinessModel: Array<{ title: string; content: string }>;
  IndustryInsights: Array<{ title: string; content: string }>;
  FamousProducts: Array<{
    area: string;
    products: { name: string; description: string }[];
  }>;
}) {
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
        <PageContent
          Page={activeSection}
          BusinessModel={BusinessModel}
          IndustryInsights={IndustryInsights}
          FamousProducts={FamousProducts}
        />
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

const PageContent = ({
  Page,
  BusinessModel,
  IndustryInsights,
  FamousProducts,
}: {
  Page: Paginations;
  BusinessModel: Array<{ title: string; content: string }>;
  IndustryInsights: Array<{ title: string; content: string }>;
  FamousProducts: Array<{
    area: string;
    products: { name: string; description: string }[];
  }>;
}) => {
  if (!BusinessModel || !IndustryInsights || !FamousProducts) {
    return <div>Loading...</div>;
  }
  switch (Page) {
    case "Business Model":
      return (
        <div className="flex flex-col gap-8 w-[95%]">
          {BusinessModel.map((model, index) => (
            <ModelAndInsightsSection
              key={index}
              title={model.title}
              content={model.content}
            />
          ))}
        </div>
      );
    case "Industry Insights":
      return (
        <div className="flex flex-col gap-8 w-[95%]">
          {IndustryInsights.map((insight, index) => (
            <ModelAndInsightsSection
              key={index}
              title={insight.title}
              content={insight.content}
            />
          ))}
        </div>
      );
    case "Famous Products":
      return (
        <div className="flex flex-col gap-6 w-[95%]">
          {FamousProducts.map((product, index) => (
            <FamousProductSection
              key={index}
              area={product.area}
              products={product.products}
            />
          ))}
        </div>
      );
  }
};

const ModelAndInsightsSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
};

const FamousProductSection = ({
  area,
  products,
}: {
  area: string;
  products: { name: string; description: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">{area}</h2>
      <ul className="list-none text-lg space-y-4">
        {products.map((product, index) => (
          <li key={index}>
            <strong className="text-xl font-medium">{product.name}:</strong>{" "}
            {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
