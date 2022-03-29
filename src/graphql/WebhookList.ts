export const WebhookList = `
query WebhookList {
  apps(first: 100) {
    totalCount
    edges {
      node {
        id
        name
        isActive
        type
        webhooks {
          id
          name
          targetUrl
        }
      }
    }
  }
}
`