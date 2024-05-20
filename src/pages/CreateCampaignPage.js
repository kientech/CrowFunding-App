import "quill-image-uploader/dist/quill.imageUploader.min.css";
import "react-quill/dist/quill.snow.css";
import { Button } from "../components/button";
import { Dropdown } from "../components/dropdown";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import axios from "axios";
import ErrorComponent from "../components/common/ErrorComponent";
import FormField from "../components/common/FormField";
import FormRow from "../components/common/FormRow";
import Heading from "../components/common/Heading";
import ImageUpload from "../components/image/ImageUpload";
import ImageUploader from "quill-image-uploader";
import Quill from "quill";
import React, { useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import TextArea from "../components/input/TextArea";
import useOnChange from "../hooks/useOnChange";

Quill.register("modules/imageUploader", ImageUploader);

const CreateCampaignPage = () => {
  const imgbbAPI =
    "https://api.imgbb.com/1/upload?key=131f9c926fa8a5a553456a41727c66f4";
  const [content, setContent] = useState("");
  const [countries, setContries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  // https://restcountries.com/v3.1/name/vietnam
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}
          `
        );
        setContries(response.data);
        console.log("🚀 ~ fetchCountries ~ response:", response);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const { handleSubmit, control, setValue, reset, watch } = useForm({
    defaultValues: {
      title: "",
      amount: "",
      "end-date": "",
      goad: "",
      raised: "",
      "short-description": "",
      video: "",
    },
  });
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };

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
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const handleSubmitCreateCompaign = async (values) => {
    try {
      console.log(values);
      await axios.post(`http://localhost:4001/api/campaigns`, {
        ...values,
        content,
      });
      reset({});
      toast.success("Create your campaign successfully");
    } catch (error) {
      toast.error("Can not create your campaign");
    }
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

        <form onSubmit={handleSubmit(handleSubmitCreateCompaign)}>
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
                  placeholder={
                    getDropdownLabel("category") || "Select a category"
                  }
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() =>
                      handleSelectDropdownOption("category", "architecture")
                    }
                  >
                    Architecture
                  </Dropdown.Option>

                  <Dropdown.Option
                    onClick={() =>
                      handleSelectDropdownOption("category", "Education")
                    }
                  >
                    Education
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
              contro={control}
            />
          </FormField>
          <FormRow>
            <FormField>
              <Label htmlFor="goal">Goal *</Label>
              <Input
                name="goal"
                placeholder="$0.00 USD"
                control={control}
              ></Input>
            </FormField>
            <FormField>
              <Label htmlFor="raised">Raised Amount *</Label>
              <Input
                name="raised"
                placeholder="$0.00 USD"
                control={control}
              ></Input>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="amount">Amount Prefilled</Label>
              <Input
                name="amount"
                placeholder="Amount Prefilled"
                control={control}
              ></Input>
              <p className="text-text3 text-left text-sm font-normal">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormField>
            <FormField>
              <Label htmlFor="video">Video</Label>
              <Input name="video" placeholder="Video" control={control}></Input>
              <p className="text-text3 text-left text-sm font-normal">
                Place Youtube or Vimeo Video URL
              </p>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="featureImage">Feature Image</Label>
              <ImageUpload onChange={setValue}></ImageUpload>
            </FormField>
            <FormField></FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="campaign-method">Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  name="campaign-method"
                  placeholder="Select one"
                ></Dropdown.Select>
                <Dropdown.List></Dropdown.List>
              </Dropdown>
            </FormField>
            <FormField>
              <Label htmlFor="country">Country</Label>
              <Dropdown>
                <Dropdown.Select
                  name="country"
                  placeholder={
                    getDropdownLabel("country") || "Select a country"
                  }
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search country"
                    onChange={setFilterCountry}
                  ></Dropdown.Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        onClick={() =>
                          handleSelectDropdownOption(
                            "country",
                            country?.name?.common
                          )
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                name="start-date"
                placeholder="Start Date"
                control={control}
                type="date"
              ></Input>
            </FormField>
            <FormField>
              <Label htmlFor="end-date">End Date</Label>
              <Input
                name="end-date"
                placeholder="End Date"
                control={control}
                type="date"
              ></Input>
            </FormField>
          </FormRow>
          <Button type="submit" className={`max-w-[255px] mx-auto block mt-5`}>
            Submit new campaign
          </Button>
        </form>
      </div>
    </>
  );
};

export default withErrorBoundary(CreateCampaignPage, {
  FallbackComponent: ErrorComponent,
});
