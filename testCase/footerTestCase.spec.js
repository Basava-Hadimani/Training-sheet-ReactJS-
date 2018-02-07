import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Footer from '../footer.tsx'



const wrapper = shallow(<Footer />)
describe('Footer Component', function() {

   it('Check Copyright tag', function() {
	expect(wrapper.find('.copyright').exists()).toEqual(true)
   })
   
    it('Check Copyright content', function() {
	expect(wrapper.find('.copyright').text()).toEqual("© 2017 Aricent Inc. All Rights Reserved.")
   })
   
   it('Check Contact tag', function() {
	expect(wrapper.find('.contact').exists()).toEqual(true)
   }) 

   it('Check Contact content', function() {
	expect(wrapper.find('.contact').text()).toEqual("Contact us : info@aricent.com")
   })   

})