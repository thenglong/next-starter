import PropTypes from "prop-types"

export default function About({ text }) {
  return (
    <div style={{ textAlign: "center", fontSize: "10rem", color: "lightblue" }}>
      {text}
    </div>
  )
}

About.propTypes = {
  text: PropTypes.string.isRequired,
}

export const getStaticProps = async () => {
  return { props: { text: "About Page 2" } }
}
