import { shallowMount } from '@vue/test-utils'
import App from '@/App'

describe('Testing integrity of data() properties', () => {
  const wrapper = shallowMount(App)

  test('should have name property', () => {
    expect(wrapper.vm.$data).toHaveProperty('name')
    expect(typeof wrapper.vm.name).toBe('string')
  });

  test('should have image property', () => {
    expect(wrapper.vm.$data).toHaveProperty('image')
    expect(typeof wrapper.vm.image).toBe('string')
  });

  test('should have type property', () => {
    expect(wrapper.vm.$data).toHaveProperty('type')
    expect(typeof wrapper.vm.type).toBe('string')
  });

  test('should have weight property', () => {
    expect(wrapper.vm.$data).toHaveProperty('weight')
    expect(typeof wrapper.vm.weight).toBe('number')
  });

  test('should have height property', () => {
    expect(wrapper.vm.$data).toHaveProperty('height')
    expect(typeof wrapper.vm.height).toBe('number')
  });

  test('should have abilities property', () => {
    expect(wrapper.vm.$data).toHaveProperty('abilities')
    expect(Array.isArray(wrapper.vm.abilities)).toBeTruthy()
  });

  test('should have data property', () => {
    expect(wrapper.vm.$data).toHaveProperty('data')
    expect(typeof wrapper.vm.data).toBe('object')
  });

  test('should have changeTest property', () => {
    expect(wrapper.vm.$data).toHaveProperty('changeTest')
    expect(typeof wrapper.vm.changeTest).toBe('number')
  });
});