import { mount } from "@vue/test-utils";
import App from "@/App";

describe("Realizar pruebas de funcionamiento de la app", () => {
  const wrapper = mount(App);

  const nameTag = wrapper.find(".pokemon-name");
  const lastNameValue = nameTag.text();

  const imgTag = wrapper.find("img");
  const lastImg = imgTag.attributes().src;

  const typeTag = wrapper.find("#type");
  const lastTypeValue = typeTag.text();

  const weightTag = wrapper.find("#weight");
  const lastWeightValue = weightTag.text();

  const heightTag = wrapper.find("#height");
  const lastHeightValue = heightTag.text();

  const abilitiesTag = wrapper.find("ul");
  const lastAbilitiesValue = abilitiesTag.text();


  test('should change name', async () => {
    /* const btn = wrapper.find('button');
    btn.trigger('click'); */

    expect(nameTag.text()).not.toContain('name');

    await wrapper.vm.$nextTick();

    expect(nameTag.text()).not.toBe(lastNameValue);
  });

  test('should change img', async () => {
    expect(imgTag.attributes().src).not.toBe('');

    await wrapper.vm.$nextTick();

    expect(imgTag.attributes().src).not.toBe(lastImg);

  });

  test('should change type', async () => {
    expect(typeTag.text()).not.toBe('');

    await wrapper.vm.$nextTick();

    expect(typeTag.text()).not.toBe(lastTypeValue);
  });

  test('should change weight', async () => {
    expect(weightTag.text()).not.toBe(0);

    await wrapper.vm.$nextTick();

    expect(weightTag.text()).not.toBe(lastWeightValue);
  });

  test('should change height', async () => {
    expect(heightTag.text()).not.toBe(0);

    await wrapper.vm.$nextTick();

    expect(heightTag.text()).not.toBe(lastHeightValue);
  });

  test('should change abilities', async() => {
    expect(abilitiesTag.text()).not.toBe([]);

    await wrapper.vm.$nextTick();

    expect(abilitiesTag.text()).not.toBe(lastAbilitiesValue);
  });
});
