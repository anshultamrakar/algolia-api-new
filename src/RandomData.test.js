import React from "react"
import { shallow } from 'enzyme';
import RandomData from "./RandomData"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let wrapper
let mpush =  { history: { push: jest.fn() } };

describe('<RandomData /> component', () => {
  it('Renders correctly', () => {
    const location_obj = { 
      pathname: '/RandomData',
      search: '',
      hash: '',
      state: {
        rawJson:{
          author: "vanxv",
          comment_text: null,
          created_at: "2021-12-01T12:06:21.000Z",
          created_at_i: 1638360381,
          num_comments: 0,
          objectID: "29402932",
          parent_id: null,
          points: 1,
          story_id: null,
          story_text: "in china AI engineer,recommended entrepreneurial directions?",
          story_title: null,
          story_url: null,
          title: "In China AI engineer,recommended entrepreneurial directions?",
          url: null
        },
        key: '5nvxpbdafa',
      }
    }
     wrapper = shallow(<RandomData location={location_obj} {...mpush}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('navigate to posts', () => {
    
    //wrapper = shallow(<RandomData {...mpush}/>);
    const instance = wrapper.instance(); // you assign your instance of the wrapper
    instance.backToPost();  
    expect(mpush.history.push).toBeCalledWith("/");
  }); 

});