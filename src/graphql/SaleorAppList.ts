export const SaleorAppList = /* GraphQL */`
query SaleorAppList {
  apps(first: 100) {
    totalCount
    edges {
      node {
        id
        name
        isActive
        type
        created
        webhooks {
          id
        }
      }
    }
  }
}
`