// ProductBox.stories.js

import ProductBox from '../components/ProductBox.vue';

export default {
  title: 'ProductBox',
  component: ProductBox,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { ProductBox },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ProductBox v-bind="args" />',
});


//👇 Each story then reuses that template
export const Default= Template.bind({});
Default.args = {
  classObj :{
    red:false,
    blue:false,
    green:false
  },
  product:{
    description:"this is the description of the brown leather",
    get_absolute_url:"/summer/brown-leather/",
    get_image:"http://127.0.0.1:8000/media/uploads/summer1.jpg",
    get_thumbnail:"http://127.0.0.1:8000/media/uploads/uploads/summer1.jpg",
    id:1,
    name:"Brown leather",
    price:"100.00",
  }
};

export const Red = Template.bind({});
Red.args = {
  classObj :{
    ...Default.args.classObj,
    red:true,
  },
  product:{
    description:"this is the description of the brown leather",
    get_absolute_url:"/summer/brown-leather/",
    get_image:"http://127.0.0.1:8000/media/uploads/summer1.jpg",
    get_thumbnail:"http://127.0.0.1:8000/media/uploads/uploads/summer1.jpg",
    id:1,
    name:"Brown leather",
    price:"100.00",
  }
};

export const Blue = Template.bind({});
Blue.args = {
  classObj :{
     ...Default.args.classObj,
   blue:true
  },
  product:{
    description:"this is the description of the brown leather",
    get_absolute_url:"/summer/brown-leather/",
    get_image:"http://127.0.0.1:8000/media/uploads/summer1.jpg",
    get_thumbnail:"http://127.0.0.1:8000/media/uploads/uploads/summer1.jpg",
    id:1,
    name:"Brown leather",
    price:"100.00",
  }
};
export const Green = Template.bind({});
Green.args = {
  classObj :{
      ...Default.args.classObj,
  green:true
  },
  product:{
    description:"this is the description of the brown leather",
    get_absolute_url:"/summer/brown-leather/",
    get_image:"http://127.0.0.1:8000/media/uploads/summer1.jpg",
    get_thumbnail:"http://127.0.0.1:8000/media/uploads/uploads/summer1.jpg",
    id:1,
    name:"Brown leather",
    price:"100.00",
  }
};

