// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

const defaultUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://openmined.org';
const defaultTitle = 'OpenMined';
const defaultDescription =
  'OpenMined is a community focused on building technology which facilitates the decentralized ownership of data and intelligence.';
const defaultImage = `${defaultUrl}/images/logo.png`;
const defaultTwitter = '@openminedorg';
const defaultSep = ' | ';

type MetaTags = {
  noCrawl: boolean,
  title: string,
  description?: string,
  image?: any,
  contentType?: string,
  twitter?: string,
  published?: Date,
  updated?: Date,
  category?: string,
  tags?: string
}

type Props =  MetaTags & {
  children: any, // TODO: React Flow Types
  title: string,
  location: {
    pathname: string
  },
  schema?: string,
  className?: string,
  id?: string
}

class Page extends Component<Props> {
  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags
    }: MetaTags,
    pathname
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? image : defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: defaultUrl + pathname },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: '120295052018408' }
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render() {
    // $FlowFixMe
    const { children, id, className, ...rest } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
          }}
          title={
            rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
          }
          link={[
            {
              rel: 'canonical',
              href: defaultUrl + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
