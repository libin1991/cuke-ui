import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BackTop from "../index";

describe("<BackTop/>", () => {
	it("should render a <BackTop/> components", () => {
		const wrapper = render(
			<div>
				<BackTop />
				<BackTop>
					<div>backTop</div>
				</BackTop>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-back-top classnames", () => {
		const wrapper = render(
			<div>
				<BackTop />
				<BackTop>
					<div>backTop</div>
				</BackTop>
			</div>
		);
		assert(wrapper.find(".cuke-back-top").length >= 1);
		assert(wrapper.find(".cuke-back-top-inner").length >= 1);
		assert(wrapper.find(".cuke-back-top-inner-icon").length === 1);
	});

	it("should render custom text", () => {
		const wrapper = render(
			<div>
				<BackTop />
				<BackTop>
					<div>哈哈哈</div>
				</BackTop>
			</div>
		);
		expect(wrapper.text()).toEqual("哈哈哈");
	});
	it("should can trigger onClick event", () => {
		const onClick = jest.fn();
		const wrapper = shallow(<BackTop onClick={onClick} />);
		wrapper.find(".cuke-back-top-inner").simulate("click");
		expect(onClick).toHaveBeenCalled();
	});
});
