import "quill-image-uploader/dist/quill.imageUploader.min.css";
import "react-quill/dist/quill.snow.css";
import { Button } from "../components/button";
import { Dropdown } from "../components/dropdown";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import axios from "axios";
import ErrorComponent from "../components/common/ErrorComponent";
import FormField from "../components/common/FormField";
import FormRow from "../components/common/FormRow";
import Heading from "../components/common/Heading";
import ImageUploader from "quill-image-uploader";
import LayoutDashboard from "../layout/LayoutDashboard";
import Quill from "quill";
import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import TextArea from "../components/input/TextArea";

Quill.register("modules/imageUploader", ImageUploader);

const CreateCampaignPage = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, control, setValue } = useForm();
  const imgbbAPI = "";

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // upload: async (file) => {
        //   const bodyFormData = new FormData();
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: imgbbAPI,
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );

  const handleSelectCategory = (value) => {
    setValue("category", value);
    console.log(value);
  };

  return (
    <>
      <div className="px-12 py-5 bg-pureWhite rounded-lg shadow-sm">
        <Heading className="flex items-center justify-center mx-auto px-12  py-4 w-[380px] bg-[#efefef] rounded-lg text-center font-bold">
          <span className="rounded-lg text-center opacity-100 font-bold text-text2 mr-2">
            Start a Campaign
          </span>{" "}
          <img srcSet="/images/rocket.png 2x" alt="" />{" "}
        </Heading>

        <form>
          <FormRow>
            <FormField>
              <Label htmlFor="title">Compaign Title *</Label>
              <Input
                name="title"
                placeholder="Write a title"
                control={control}
              ></Input>
            </FormField>
            <FormField>
              <Label htmlFor="category">Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  name="category"
                  placeholder="Select a category"
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("architecture")}
                  >
                    Architecture
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormField>
          </FormRow>
          <FormField>
            <Label htmlFor="short-description">Short Description *</Label>
            <TextArea
              placeholder="Write a short description..."
              control={control}
              name="short-description"
            ></TextArea>
          </FormField>
          <FormField>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story"
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
            />
          </FormField>
          <FormRow>
            <FormField>
              <Label htmlFor="title">Goal *</Label>
              <Input
                name="title"
                placeholder="$0.00 USD"
                control={control}
              ></Input>
            </FormField>
            <FormField>
              <Label htmlFor="title">Raised Amount *</Label>
              <Input
                name="title"
                placeholder="$0.00 USD"
                control={control}
              ></Input>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="title">Amount Prefilled</Label>
              <Input
                name="title"
                placeholder="Amount Prefilled"
                control={control}
              ></Input>
              <p className="text-text3 text-left text-sm font-normal">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormField>
            <FormField>
              <Label htmlFor="title">Video</Label>
              <Input name="title" placeholder="Video" control={control}></Input>
              <p className="text-text3 text-left text-sm font-normal">
                Place Youtube or Vimeo Video URL
              </p>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="category">Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  name="category"
                  placeholder="Select one"
                ></Dropdown.Select>
                <Dropdown.List></Dropdown.List>
              </Dropdown>
            </FormField>
            <FormField>
              <Label htmlFor="category">Country</Label>
              <Dropdown>
                <Dropdown.Select
                  name="category"
                  placeholder="Select a country"
                ></Dropdown.Select>
                <Dropdown.List></Dropdown.List>
              </Dropdown>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="title">Start Date</Label>
              <Input
                name="title"
                placeholder="Start Date"
                control={control}
              ></Input>
            </FormField>
            <FormField>
              <Label htmlFor="title">End Date</Label>
              <Input
                name="title"
                placeholder="End Date"
                control={control}
              ></Input>
            </FormField>
          </FormRow>
          <Button className={`w-[255px] mx-auto block mt-5`}>
            Submit new campaign{" "}
          </Button>
        </form>
      </div>
    </>
  );
};

export default withErrorBoundary(CreateCampaignPage, {
  FallbackComponent: ErrorComponent,
});
