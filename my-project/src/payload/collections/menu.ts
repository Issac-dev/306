import { CollectionConfig } from 'payload/types';

const Menu: CollectionConfig = {
  slug: 'menu',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Dish Name',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        {
          label: 'Appetizer',
          value: 'appetizer',
        },
        {
          label: 'Main Course',
          value: 'main_course',
        },
        {
          label: 'Dessert',
          value: 'dessert',
        },
        {
          label: 'Beverage',
          value: 'beverage',
        },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
    },
  ],
};

export default Menu;
