import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Marketplace',
    Svg: require('@site/static/img/markett.svg').default,
    description: (
      <>
        The Marketplace serves as a dynamic platform where businesses can showcase their products
        to a broader audience. It facilitates seamless interactions between sellers and buyers, 
        allowing for a rich shopping experience.
      </>
    ),
  },
  {
    title: 'Supply',
    Svg: require('@site/static/img/supply.svg').default,
    description: (
      <>
        The Supply system ensures that inventory levels are managed effectively to meet consumer 
        demand. It integrates real-time data to streamline operations and maintain optimal stock 
        levels.
      </>
    ),
  },
  {
    title: "REST API's",
    Svg: require('@site/static/img/rest_api.svg').default,
    description: (
      <>
       REST APIs (Representational State Transfer Application Programming Interfaces) provide a
       standardized way for applications to communicate over the web. Our APIs are designed to
       facilitate easy integration with third-party systems, enhancing functionality and user 
       experience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
