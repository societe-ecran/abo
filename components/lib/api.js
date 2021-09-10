// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch('https://www.redirectiondfghjhgf.com/graphql/', {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}


export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}



export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}




export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      slug
      date
      content
     title

      categories {
        edges {
          node {
            name
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );

  return data;
}

// partagerNosHistoires {
//   auteur
//   date
//   resume
//   source
//   titreDeLarticle
// }




export async function getCollectifs() {
  const data = await fetchAPI(
    `
    query MyQuery {
      posts(where: {categoryName: "groupesEtCollectifs"}) {
        edges {
          node {
            content
          }
        }
      }
    }
    `
  );

  return data;
}

export async function getHistoires() {
  const data = await fetchAPI(
    `
      query MyQuery {
      posts(where: {categoryName: "PartagerNosHistoires"}) {
        edges {
          node {
            partagerNosHistoires {
              auteur
              date
              resume
              source
              titreDeLarticle
            }
            slug
          }
        }
      }
    }
    `
  );

  return data;
}


export async function getDates() {
  const data = await fetchAPI(
    `
    query MyQuery {
      posts(where: {categoryName: "DatesDeLaTournee"}) {
        edges {
          node {
            datestournee {
              dateDeLaPresentation
              ville
            }
            content
          }
        }
      }
    }
    `
  );

  return data;
}


export async function getPageNevreGiveUp() {
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id:"cG9zdDoxMzk=") {
        traductionsCompletes {
          auteur
          date
          traduction
        }
        title
        content
      }
    }
    `
  );

  return data;
}

export async function getPageAuWendy() {
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id:"cG9zdDoxMzc=") {
        traductionsCompletes {
          auteur
          date
          traduction
        }
        title
        content
      }
    }
    `
  );

  return data;
}

export async function getPageExerxerAbolition() {
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id:"cG9zdDoxNDE=") {
        traductionsCompletes {
          auteur
          date
          traduction
        }
        title
        content
      }
    }
    `
  );

  return data;
}

export async function getPagePartirRessources() {
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id:"cG9zdDoxNDU=") {
        traductionsCompletes {
          auteur
          date
          traduction
        }
        title
        content
      }
    }
    `
  );

  return data;
}

export async function getPageSista() {
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id:"cG9zdDoxNDM=") {
        traductionsCompletes {
          auteur
          date
          traduction
        }
        title
        content
      }
    }
    `
  );

  return data;
}


