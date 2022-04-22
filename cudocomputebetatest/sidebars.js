/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
// mainSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  

module.exports = {
docs: [
'intro',
  {
    type: 'category',
    label: 'Features',
    link: {
      type: 'generated-index',
    },
    items: [
    {
      type: 'doc',
      id: 'features/cloudworkload',
    },
    {
      type: 'doc',
      id: 'features/kubernetes',
    },
  ],
},
{
    type: 'category',
    label: 'API',
    items: [
      {
        type: 'category',
        label: 'API Specs',
        items: [
          {
          type: 'link',
          label: 'Petstore',
          href: 'https://cdcompute-beta-draft-docs.netlify.app/api/specs/apispec',
          },
          {
            type: 'link',
            label: 'USPTO',
            href: 'https://cdcompute-beta-draft-docs.netlify.app/api/specs/apispec2',
            },
          ],
  },
  {          
    type: 'category',
    label: 'Code Examples',
    items: ['api/code-examples'],
  },
],
},
],
};