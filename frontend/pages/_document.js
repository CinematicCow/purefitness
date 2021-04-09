import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="PureFitness Gym by Raj in Dehradun. We specialize in weight loss, weight gain, CrossFit, Cardio Training, Professional Training, Yoga, Outdoor Actvities & Personal Training"
          />
          <meta name="keywords" />
          <meta name="author" content="Prajwal Kakkar" />
          {/* Facebook and Twitter integration */}
          <meta property="og:title" content="PureFitness" />
          <meta
            property="og:image"
            content="https://i.ibb.co/Kh6zdwy/pf-logo-min.jpg"
          />
          <meta property="og:url" content="https://www.purefitness.co.in" />
          <meta property="og:site_name" content="PureFitness" />
          <meta
            property="og:description"
            content="PureFitness Gym by Raj in Dehradun. We specialize in weight loss, weight gain, CrossFit, Cardio Training, Professional Training, Yoga, Outdoor Actvities & Personal Training"
          />

          {/* Place favicon.ico and apple-touch-icon.png in the root directory */}
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700,900"
            rel="stylesheet"
            type="text/css"
          />
          {/* Animate.css */}
          <link rel="stylesheet" href="css/animate.css" />
          {/* Icomoon Icon Fonts*/}
          <link rel="stylesheet" href="css/icomoon.css" />
          {/* Bootstrap  */}
          <link rel="stylesheet" href="css/bootstrap.css" />
          {/* Superfish */}
          <link rel="stylesheet" href="css/superfish.css" />
          <link rel="stylesheet" href="css/style.css" />
          {/* Modernizr JS */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
