import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import { DocSearch } from '@docsearch/react';
import { Link, navigate } from 'gatsby';

const Hit = ({ hit, children }) => {
  return <Link to={hit.url}>{children}</Link>;
};

const Search = () => (
  <Fragment>
    <Global
      styles={css`
        :root {
          --docsearch-primary-color: #ff6b81;
          --docsearch-text-color: #000;
          --docsearch-container-background: rgba(9, 10, 17, 0.8);
          --docsearch-modal-background: #281e36;
          --docsearch-modal-shadow: inset 1px 1px 0 0 rgb(44, 46, 64),
            0 3px 8px 0 rgb(0, 3, 9);
          --docsearch-searchbox-background: rgb(9, 10, 17);
          --docsearch-searchbox-focus-background: #fff;
          --docsearch-hit-color: rgb(190, 195, 201);
          --docsearch-hit-shadow: none;
          --docsearch-hit-background: #30263d;
          --docsearch-key-gradient: linear-gradient(
            -26.5deg,
            var(--docsearch-modal-background) 0%,
            rgb(65 46 80) 100%
          );
          --docsearch-key-shadow: inset 0 -2px 0 0 rgb(81 31 82),
            inset 0 0 1px 1px rgb(125 81 111), 0 2px 2px 0 rgba(3, 4, 9, 0.5);
          --docsearch-footer-background: #2f263c;
          --docsearch-footer-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
          --docsearch-logo-color: #fff;
          --docsearch-muted-color: rgb(127, 132, 151);

          .DocSearch-Form {
            --docsearch-searchbox-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
          }

          .DocSearch-Button {
            --docsearch-searchbox-background: rgb(235, 237, 240);
            --docsearch-searchbox-focus-background: #fff;
            --docsearch-text-color: rgb(28, 30, 33);
            --docsearch-muted-color: rgb(117 124 138);
            --docsearch-key-gradient: linear-gradient(
              -225deg,
              rgb(213, 219, 228) 0%,
              rgb(248, 248, 248) 100%
            );
            --docsearch-searchbox-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
            --docsearch-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230),
              inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
          }
        }

        .DocSearch-Button {
          margin: 10px;
          height: 39px;
        }

        .DocSearch-Button-Placeholder {
          width: 100%;
          text-align: left;
        }

        .DocSearch-Search-Icon {
          width: 28px;
        }

        .DocSearch-Modal {
          a {
            border-bottom-style: none;
          }
          li {
            margin-bottom: 0;
          }
          .DocSearch-Commands-Key {
            padding-bottom: 1px;
          }
        }

        @media (max-width: 750px) {
          .DocSearch-Button-KeySeparator,
          .DocSearch-Button-Key {
            display: flex;
          }

          .DocSearch-Button-Placeholder {
            display: flex;
          }
        }
      `}
    />
    <DocSearch
      apiKey="d5fa05c4e33e776fbf2b8021cbc15b37"
      indexName="popper"
      navigator={{
        navigate({ suggestionUrl }) {
          navigate(suggestionUrl);
        },
      }}
      hitComponent={Hit}
      transformItems={items => {
        return items.map(item => {
          // We transform the absolute URL into a relative URL to
          // leverage Gatsby's preloading.
          const a = document.createElement('a');
          a.href = item.url;

          return {
            ...item,
            url: `${a.pathname}${a.hash}`,
          };
        });
      }}
    />
  </Fragment>
);

export default Search;
