"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../../navigation";
import FilledButton from "../filledButton";
import OutlineButton from "../../outlineButton";
import { redirect, useRouter } from "next/navigation";
import AddressList from "./address-list";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Login from "./login";
import Loading from "../loading";
import CreateAddressSkeleton from "@/components/skeleton/create-address";
import AddressSkeleton from "@/components/skeleton/address";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Profile = () => {
  const { data: session, status } = useSession();
  const [data, setData] = React.useState(null);
  const { desktop_mode } = useSelector((state) => state.app);
  const fetchUser = async () => {
    let response = await fetch(`/api/user/data?populate=address`, {
      method: "GET",
    });
    let res = await response.json();
    setData(res.user);
  };
  useEffect(() => {
    if (status === "authenticated") {
      fetchUser();
    }
  }, [status]);
  if (status === "loading") {
    return <Loading />;
  }
  const router = useRouter();
  if (!session) {
    return redirect("/auth/sign_in");
  } else {
    return (
      <div className="bg-zinc-50 min-h-screen mb-16">
        <style>{`
            .loading-spinner {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100px;
              }
              
              .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                border-top: 4px solid #000;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                animation: spin 0.5s linear infinite;
              }
              
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(720deg); }
              }
            `}</style>
        <Navigation menuList={[]} pageName="My Profile" />
        <div
          className={`w-full ${
            desktop_mode ? "grid-cols-4 grid-rows-1" : "grid-cols-2 grid-rows-2"
          } gap-3 p-5 grid`}
        >
          <FilledButton
            onClick={() => router.push("/user/orders")}
            lable="Orders"
          />
          <OutlineButton
            lable="Edit Profile"
            onClick={() => router.push("/user/edit-profile")}
          />
          <OutlineButton
            onClick={() => router.push("/favorities")}
            lable="Favorities"
          />
          <OutlineButton lable="Contact Us" />
        </div>
        <div className="w-full border-b flex p-3 pb-5 gap-x-3">
          <div className="bg-blue-10 px-5 flex flex-col w-[50%] h-full">
            <div className="text-lg mt-auto cursor-default text-gray-700 font-bold leading-tight">
              {session.user?.name}
            </div>
            <div className="text-xs mt-1 mb-auto text-gray-700 font-semibold">
              +91 {session.user.phoneNumber}
            </div>
          </div>
          <div className="bg-blue-10 px-5 flex flex-col w-[50%] h-full">
            <button
              onClick={async () => {
                await signOut({ redirect: true });
              }}
              className="m-auto bg-red-200 -mr-1 cursor-default px-3.5 py-2 rounded-lg text-red-800 border border-red-300 hover:border-red-900 shadow transition"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
        {data?.address ? (
          <div className="p-5">
            <div className="flex">
              <span className="text-lg font-semibold text-gray-700 my-auto">
                Your Address
              </span>
              {data.address.length > 0 && (
                <button
                  onClick={() => router.push("/user/address/new")}
                  className="text-xs text-center font-semibold text-gray-700  ml-auto border rounded-lg px-3 py-2 flex py-auto my-auto"
                >
                  + Add Address
                </button>
              )}
            </div>
            {data.address.length > 0 ? (
              data.address.map((i, index) => (
                <AddressList
                  key={index}
                  onDelete={async () => {
                    let response = await fetch(
                      `/api/user/data?deleteType=address&id=${i._id}`,
                      {
                        method: "DELETE",
                      }
                    );
                    if (response.ok) {
                      fetchUser();
                      toast.success("Address deleted");
                    } else {
                      fetchUser();
                      toast.error("Failed to delete");
                    }
                  }}
                  {...i}
                />
              ))
            ) : (
              <CreateAddressSkeleton
                onPress={() => {
                  router.push("/user/address/new");
                }}
              />
            )}
          </div>
        ) : (
          <>
            <AddressSkeleton />
            <AddressSkeleton />
          </>
        )}
      </div>
    );
  }
};

export default Profile;
