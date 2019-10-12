import React from "react"
import Layout from "../components/layout"

const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
const IndexPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexFlow: "column nowrap",
          margin: "6px 10px",
          maxWidth: "800px",
        }}
      >
        <h2>
          Using Prism to style <code>code blocks</code> in Gatsby
        </h2>
        <div className="code-container">
          <pre>
            <code className="language-javascript">{code}</code>
          </pre>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
