import { unstable_cache } from "next/cache";

interface GetProductInfosLightVariables {
  locale: string;
  urlKey: string;
  articleCode: string;
}

export const getProductInfosLight = async (
  variables: GetProductInfosLightVariables,
) => {
  const keyParts = [
    "product-infos-light",
    variables.locale,
    variables.urlKey,
    variables.articleCode?.toString() || "",
  ];

  return unstable_cache(
    async () => getProductInfosLightNoCache(variables),
    keyParts,
    {
      revalidate: 6000,
      tags: buildProductTags({
        urlKey: variables.urlKey,
        articleCode: variables.articleCode as string | undefined,
        locale: variables.locale,
      }),
    },
  )();
};

const getProductInfosLightNoCache = async (
  variables: GetProductInfosLightVariables,
) => {
  console.log("getProductInfosLightNoCache", variables);
  return {
    product: {
      name: "Product 1",
      price: 100,
      ...variables,
    },
  };
};

export const buildProductTags = ({
  urlKey,
  articleCode,
  locale,
}: {
  urlKey?: string;
  articleCode?: string;
  locale: string;
}) =>
  [
    "product",
    articleCode ? `product:${articleCode}` : null,
    articleCode ? `product:${articleCode}:${locale}` : null,
    urlKey ? `product:${urlKey}` : null,
    urlKey ? `product:${urlKey}:${locale}` : null,
  ].filter(Boolean) as string[];
