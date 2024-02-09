"use client";
import React, { useState } from "react";
import checkSession from "@/lib/checkSession";
import FilledButton from "@/app/(v1)/filledButton";
import StateSelector from "../stateSelector";
import AddressTypeSelector from "../addressTypeSelector";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";

const AddressModel = ({ onCreate, isModel }) => {
  checkSession();
  const { fromUri, goBack } = useSearchParams();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fullName.trim() === "" ||
      (mobileNumber.trim().length === 10 ? false : mobileNumber.trim().length === 13 ? false : true) ||
      pincode.trim().length != 6 ||
      flatOrBuilding.trim() == "" ||
      areaOrStreet.trim() == "" ||
      userState.trim() == ""
    ) {
      toast.warn("Please fill the form correctly.");
      console.warn("ADDRESS_UPLOADING_WARNING_MODEL");
      return;
    }
    let response = await fetch(`/api/user/data?create=address`, {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName.trim(),
        mobileNumber: (mobileNumber.trim().length === 10 ? mobileNumber : mobileNumber.trim().length === 13 ? mobileNumber.trim().slice(3) : mobileNumber),
        pincode: pincode.trim(),
        flatOrBuilding: flatOrBuilding.trim(),
        areaOrStreet: areaOrStreet.trim(),
        townOrCity: townOrCity.trim(),
        state: userState,
        defaultAddress,
        addressType,
      }),
    });
    let res = await response.json();
    if (response.ok) {
      toast.success(res.message);
      try {
        if (isModel) onCreate();
      } catch (error) {
        console.log(error);
      }
      if (fromUri) {
        router.push(fromUri);
      }
      if (goBack) {
        router.back();
      }
    } else {
      toast.error(res.error);
    }
    setFullName("");
    setMobileNumber("");
    setPincode("");
    setFlatOrBuilding("");
    setAreaOrStreet("");
    setTownOrCity("");
    setUserState("");
    setDefaultAddress(false);
    setAddressType("");
  };
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [flatOrBuilding, setFlatOrBuilding] = useState("");
  const [areaOrStreet, setAreaOrStreet] = useState("");
  const [townOrCity, setTownOrCity] = useState("");
  const [userState, setUserState] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [addressType, setAddressType] = useState("");
  const handleSelectState = (state) => {
    setUserState(state);
  };
  return (
    <>
      <div className="p-5 w-full bg-red-00 h-full mb-20">
        <form
          onSubmit={handleSubmit}
          className="my-auto flex-col flex bg-blue-10 w-full gap-y-4"
        >
          <input
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Full name (First and Last name)"
            className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
          />
          <input
            value={mobileNumber}
            required
            onChange={(e) => setMobileNumber(e.target.value)}
            type="tel"
            placeholder="Mobile Number (May be used to assist delivery)"
            className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
          />
          <input
            value={pincode}
            required
            onChange={(e) => setPincode(e.target.value)}
            type="number"
            placeholder="6 digits [0-9] PIN code"
            className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
          />
          <input
            value={flatOrBuilding}
            required
            onChange={(e) => setFlatOrBuilding(e.target.value)}
            type="text"
            placeholder="Flat, House no., Building, Company, Apartment"
            className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
          />
          <input
            value={areaOrStreet}
            required
            onChange={(e) => setAreaOrStreet(e.target.value)}
            type="text"
            placeholder="Area, Street, Sector, Village"
            className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
          />
          <div className="flex w-full gap-x-2">
            <input
              value={townOrCity}
              required
              onChange={(e) => setTownOrCity(e.target.value)}
              type="text"
              placeholder="Town/City"
              className="block focus:border-[#f8cd31] placeholder:text-sm shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200"
            />
            <StateSelector
              selectedState={userState}
              onSelectState={handleSelectState}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={defaultAddress}
              onCheckedChange={(value) => setDefaultAddress(value)}
              id="default-address"
            />
            <label
              htmlFor="default-address"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Make this my default address.
            </label>
          </div>
          <span className="text-gray-700 font-medium">
            Delivery instructions (optional)
          </span>
          <AddressTypeSelector
            types={[
              {
                optionName: "House",
                id: "house",
                lable:
                  "Independent house, villa, or builder floor (7 AM - 9 PM delivery)",
              },
              {
                optionName: "Apartment",
                id: "apartment",
                lable:
                  "Gated society, flats, or condominiums (7 AM - 9 PM delivery)",
              },
              {
                optionName: "Business",
                id: "bussiness",
                lable:
                  "Office, retail store, hotel, hospital, malls, etc (10 AM - 6 PM delivery)",
              },
              {
                optionName: "Other",
                id: "other",
                lable:
                  "Other accommodations like hostel, PG, farmhouse, etc. (10 AM - 6 PM delivery)",
              },
            ]}
            selectedid={addressType}
            onSelect={(id) => {
              setAddressType(id);
            }}
          />
          <FilledButton type={"submit"} lable="Save" />
        </form>
      </div>
    </>
  );
};

export default AddressModel;
