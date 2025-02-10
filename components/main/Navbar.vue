<template>
  <div class="drawer z-20">
    <input id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-100 w-full">
        <div class="flex-none lg:hidden">
          <label
            for="side-drawer"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost swap swap-rotate z-21"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="swap-off h-5 w-5 [:checked~*_&]:!opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <svg class="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal max-lg:hidden">
            <!-- Navbar menu content here -->
            <li v-for="item in sidebarItems" v-bind:key="item">
              <NuxtLink :to="localePath(item.to)">{{
                item.title
              }}</NuxtLink>
            </li>
          </ul>
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-field">
              <IconLanguage size="24" stroke-width="1.5" />
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
            >
              <li
                v-for="locale in locales"
                :key="locale.code"
                color="primary"
                :aria-label="`Switch language to ${locale.code}`"
              >
                <NuxtLink :to="switchLocalePath(locale.code)">
                  {{ locale.code.toUpperCase() }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="side-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div class="bg-base-200 min-h-full w-80">
        <ul class="menu p-4">
          <li v-for="item in sidebarItems" v-bind:key="item">
            <NuxtLink :to="localePath(item.to)">
              <component
                :is="item.icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              />
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import sidebarItems from "~/components/main/sidebarItem";
import {
  IconLanguage,
} from "@tabler/icons-vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

</script>