import { useStaticQuery, graphql } from 'gatsby';

const useEventInfo = () => {
  const { eventJson } = useStaticQuery(
    graphql`
      query {
        eventJson {
          general {
            closingDate
            openingDate
            plaquetteUrl
          }
          cfp {
            closingDate
            openingDate
            url
          }
          programPublishingDate
          registration {
            url
            earlySoldout
            normalSoldout
            opened
          }
          themes {
            title
            icon
            description
          }
        }
      }
    `
  );
  return eventJson;
};

export default useEventInfo;
