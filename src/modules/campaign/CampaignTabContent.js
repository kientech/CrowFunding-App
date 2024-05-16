import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/button";
import Heading from "../../components/common/Heading";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import FormField from "../../components/common/FormField";
import CampaignTabItem from "./CampaignTabItem";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignTabContent = () => {
  const { handleSubmitting, control } = useForm();
  return (
    <Fragment>
      <div className="px-[135px] py-5 bg-pureWhite shadow-sm rounded-lg flex items-center justify-between mb-10">
        <div>
          <NavLink
            className={`text-sm font-semibold text-secondary mr-[60px] inline-block`}
          >
            Campaign
          </NavLink>
          <NavLink className={`text-sm mr-[60px] inline-block`}>Risks</NavLink>
          <NavLink className={`text-sm mr-[60px] inline-block`}>FAQ</NavLink>
          <NavLink className={`text-sm mr-[60px] inline-block`}>
            Updates
          </NavLink>
          <NavLink className={`text-sm mr-[60px] inline-block`}>
            Comments
          </NavLink>
        </div>
        <div className="w-[200px]">
          <Button className={`w-full inline-block`}>Back this project</Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[650px] ">
          <Heading className="mb-5">STORY</Heading>
          <div>
            <div>
              <img
                src="https://cdn.dribbble.com/users/276778/screenshots/17381722/media/f01a3458ddf2eec77036afdc98327879.jpg?resize=1600x1200&vertical=center"
                alt=""
                className="w-full h-[400px] object-cover rounded-lg my-5"
              />
              <p className="text-md font-normal px-8 py-4">
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.dribbble.com/users/276778/screenshots/17381722/media/f01a3458ddf2eec77036afdc98327879.jpg?resize=1600x1200&vertical=center"
                alt=""
                className="w-full h-[400px] object-cover rounded-lg my-5"
              />
              <p className="text-md font-normal px-8 py-4">
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.dribbble.com/users/276778/screenshots/17381722/media/f01a3458ddf2eec77036afdc98327879.jpg?resize=1600x1200&vertical=center"
                alt=""
                className="w-full h-[400px] object-cover rounded-lg my-5"
              />
              <p className="text-md font-normal px-8 py-4">
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[441px]">
          <Heading className="mb-5">Support</Heading>
          <div>
            <div className="p-5 bg-pureWhite rounded-lg shadow-sm mb-10">
              <p className="flex items-center justify-center text-center text-text4 font-normal mb-7">
                Pledge without reward
              </p>
              <FormField>
                <Input
                  placeholder="$10"
                  control={control}
                  name="pledge"
                ></Input>
              </FormField>
              <div className="p-5 bg-[#F6F6F6] rounded-lg mb-10">
                <h3 className="text-sm font-semibold text-text2 mb-5">
                  Back it because you believe in it.
                </h3>
                <p className="text-sm font-normal text-text3 ">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>
              <Button className={`inline-block bg-secondary text-pureWhite`}>
                Continue
              </Button>
            </div>
            <div className="flex flex-col gap-y-10">
              {[1, 2, 3].map((item) => (
                <CampaignTabItem key={item}></CampaignTabItem>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Heading>You also may be interested in</Heading>
        <CampaignGrid>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
        </CampaignGrid>
      </div>
    </Fragment>
  );
};

export default CampaignTabContent;
