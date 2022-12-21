import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    redirect:'/home',
    component: () => import("@/views/layout/Layout.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/layout/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/home/Home.vue"),
      },
    ],
  },
  {
    path: "/division",
    meta: { title: "医院综合" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/division/list",
    children: [
      {
        path: "/division/list",
        meta: { title: "科室管理" },
        component: () => import("@/views/division/DivisionList.vue"),
      },
      {
        path: "/division/add",
        meta: { title: "添加科室" },
        component: () => import("@/views/division/DivisionAdd.vue"),
      },
    ],
  },

  {
    path: "/patient",
    meta: { title: "患者大数据" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/patient/data",
    children: [
      {
        path: "/patient/data",
        meta: { title: "疾病大数据" },
        component: () => import("@/views/patient/PatientData.vue"),
      },
      {
        path: "/patient/total",
        meta: { title: "药品耗材统计" },
        component: () => import("@/views/patient/PatientTotal.vue"),
      },
    ],
  },

  {
    path: "/individual",
    meta: { title: "动态个人" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/individual/registration",
    children: [
      {
        path: "/individual/registration",
        meta: { title: "挂号管理" },
        component: () => import("@/views/registration/Registration.vue"),
      },
    ],
  },


  {
    path: "/pharmacy",
    meta: { title: "中西医药房" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/pharmacy/data",
    children: [
      {
        path: "/pharmacy/data",
        meta: { title: "营收数据表" },
        component: () => import("@/views/pharmacy/PharmacyData.vue"),
      },
      {
        path: "/pharmacy/prescription",
        meta: { title: "处方综合管理" },
        component: () => import("@/views/pharmacy/PharmacyPrescription.vue"),
      },
    ],
  },


  {
    path: "/medical",
    meta: { title: "医疗前线" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/medical/open",
    children: [
      {
        path: "/medical/open",
        meta: { title: "处方开具" },
        component: () => import("@/views/medical/MedicalOpen.vue"),
      },
      {
        path: "/medical/prescription",
        meta: { title: "处方综合管理" },
        component: () => import("@/views/medical/MedicalPrescription.vue"),
      },
    ],
  },


  {
    path: "/medical",
    meta: { title: "医疗前线" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/medical/open",
    children: [
      {
        path: "/medical/open",
        meta: { title: "处方开具" },
        component: () => import("@/views/medical/MedicalOpen.vue"),
      },
      {
        path: "/medical/prescription",
        meta: { title: "处方综合管理" },
        component: () => import("@/views/medical/MedicalPrescription.vue"),
      },
    ],
  },



  {
    path: "/drugs",
    meta: { title: "医疗药品出入库" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/drugs/list",
    children: [
      {
        path: "/drugs/list",
        meta: { title: "医疗用品综合管理" },
        component: () => import("@/views/drugs/DrugsList.vue"),
      },
      {
        path: "/drugs/add",
        meta: { title: "添加药品耗材" },
        component: () => import("@/views/drugs/DrugsAdd.vue"),
      },
    ],
  },



  {
    path: "/doctor",
    meta: { title: "分级医生" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/doctor/list",
    children: [
      {
        path: "/doctor/list",
        meta: { title: "综合列表" },
        component: () => import("@/views/doctor/DoctorList.vue"),
      },
      {
        path: "/doctor/shift",
        meta: { title: "排班管理" },
        component: () => import("@/views/doctor/DoctorShift.vue"),
      },
      {
        path: "/doctor/info",
        meta: { title: "修改个人信息" },
        component: () => import("@/views/doctor/DoctorInfo.vue"),
      }
    ],
  },




  {
    path: "/nurse",
    meta: { title: "分级护士" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/nurse/list",
    children: [
      {
        path: "/nurse/list",
        meta: { title: "综合列表" },
        component: () => import("@/views/nurse/NurseList.vue"),
      },
      {
        path: "/nurse/shift",
        meta: { title: "排班管理" },
        component: () => import("@/views/nurse/NurseShift.vue"),
      },
      {
        path: "/nurse/info",
        meta: { title: "修改个人信息" },
        component: () => import("@/views/nurse/NurseInfo.vue"),
      }
    ],
  },



  {
    path: "/bed",
    meta: { title: "病床管理" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/bed/list",
    children: [
      {
        path: "/bed/list",
        meta: { title: "综合管理" },
        component: () => import("@/views/bed/BedList.vue"),
      },
      {
        path: "/bed/add",
        meta: { title: "添加床位" },
        component: () => import("@/views/bed/BedAdd.vue"),
      },
    ],
  },


  
  {
    path: "/account",
    meta: { title: "全账号管理" },
    component: () => import("@/views/layout/Layout.vue"),
    redirect: "/account/list",
    children: [
      {
        path: "/account/list",
        meta: { title: "账号管理" },
        component: () => import("@/views/account/AccountList.vue"),
      },
      {
        path: "/account/add",
        meta: { title: "添加账号" },
        component: () => import("@/views/account/AccountAdd.vue"),
      },
    ],
  },



];

const router = new VueRouter({
  routes,
});

export default router;
