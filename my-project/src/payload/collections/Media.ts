// import { slateEditor } from '@payloadcms/richtext-slate'
// import path from 'path'
// import type { CollectionConfig } from 'payload/types'

// export const Media: CollectionConfig = {
//   slug: 'media',
//   upload: {
//     staticDir: path.resolve(__dirname, '../../../media'),
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'caption',
//       type: 'richText',
//       editor: slateEditor({
//         admin: {
//           elements: ['link'],
//         },
//       }),
//     },
//   ],
// }

import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  fields: [],
};

export default Media;
