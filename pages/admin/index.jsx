import React from "react";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { HStack, VStack, Text } from "@chakra-ui/react";
import Header from "../../components/common/Header";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiAnchor, BiArchive, BiBarcodeReader, BiChart } from "react-icons/bi";

import Navbar from "../../components/admin/Navbar";

import AdminLayout from "../../components/layouts/AdminLayout";

import { useTranslation } from "react-i18next";

const Admin = () => {
  const { t } = useTranslation();
  return (
    <AdminLayout
      title="Admin Dashboard"
      description="Admin Dashboard"
      sidebar={
        <Navbar
          items={[
            {
              label: t("dashboard"),
              href: "/admin/",
              icon: <AiOutlineHome size={24} />,
            },
            {
              label: t("products"),
              href: "/admin/products",
              icon: <BiBarcodeReader size={24} />,
            },
            {
              label: t("orders"),
              href: "/admin/orders",
              icon: <BiArchive size={24} />,
            },
            {
              label: t("campaigns"),
              href: "/admin/campaigns",
              icon: <BiChart size={24} />,
            },
            {
              label: t("settings"),
              href: "/admin/settings",
              icon: <AiOutlineSetting size={24} />,
            },
          ]}
          bottomItems={[
            {
              label: t("logout"),
              icon: <AiOutlineLogout size={24} />,
            },
          ]}
        />
      }
    >
      <div> hi</div>
    </AdminLayout>
  );
};

export default Admin;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  console.log(session);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  } else if (!session.admin) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  return {
    props: {
      session,
    },
  };
}
