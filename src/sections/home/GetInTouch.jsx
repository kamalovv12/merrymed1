import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useLocales from "../../hooks/useLocales";
import { CellPhoneIcon, MailIcon, MessageIcon, UserIcon } from "../../svg/view";

const GetInTouch = () => {
  const { t } = useLocales();

  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    for (let key in formValues) {
      if (!formValues[key]) {
        toast.error(t(`${key} required`));
        return null;
      }
    }
    setIsLoading(true);
    axios
      .post("https://merry-med-back.onrender.com/api/contact", formValues)
      .then(() => {
        toast.success(t("sucessResponse"));
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(t("errorResponse"));
        setIsLoading(false);
      });
  };

  return (
    <section id="contact-us" className="bg-[#f9f9f9]">
      <div className="container-y-axis container-x-axis z-0  l:max-w-full">
        <div className="flex flex-col z-10 justify-start items-start gap-4">
          <h3 className="typography-2 text-black uppercase font-[700]">
            {t("Get In Touch")}
          </h3>
        </div>
        <div className="lg:flex-col h-full flex items-stretch  gap-11">
          <form
            onSubmit={onSubmit}
            className="z-10 w-full max-w-[1100px] bg-white relative p-[6%] flex flex-col justify-start items-start gap-14 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          >
            <div className="flex flex-row justify-between items-center w-full gap-6 lg:flex-col lg:gap-14">
              <Input
                type="text"
                variant="underlined"
                placeholder="Name"
                name="name"
                onChange={onChange}
                startContent={<UserIcon className="fill-[#c4c4c4]" />}
              />
              <Input
                type="text"
                variant="underlined"
                name="email"
                onChange={onChange}
                placeholder="E-mail"
                startContent={<MailIcon className="fill-[#c4c4c4]" />}
              />
              <Input
                type="tel"
                variant="underlined"
                name="phone_number"
                onChange={onChange}
                placeholder="Phone"
                startContent={<CellPhoneIcon className="fill-[#c4c4c4]" />}
              />
            </div>
            <div className="w-full">
              <Textarea
                variant="underlined"
                placeholder="Description"
                name="message"
                onChange={onChange}
                labelPlacement="outside"
                fullWidth
                minRows={8}
                startContent={<MessageIcon className="fill-[#c4c4c4]" />}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              radius="none"
              className="bg-black text-white w-[200px] sm:w-full"
            >
              {t("SEND")}
            </Button>
          </form>
          <div className="lg:max-w-full lg:max-h-[400px] w-[100vh] shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4756.294119001099!2d71.6965341!3d41.0487884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4d09cdfa312b%3A0x2e000f66520c1e68!2sMerrymed%20farm!5e1!3m2!1sen!2s!4v1708767684606!5m2!1sen!2s"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
