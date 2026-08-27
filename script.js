/* KARAKARA static site wiring: display only confirmed store data and supplied assets. */
(function () {
  "use strict";

  var config = window.KARAKARA_CONFIG || {};

  function value(key) {
    var raw = config[key];
    return typeof raw === "string" ? raw.trim() : "";
  }

  function setFields(key, text) {
    document.querySelectorAll('[data-field="' + key + '"]').forEach(function (node) {
      node.textContent = text;
    });
  }

  function safeHttpUrl(raw) {
    if (!raw) return "";
    try {
      var parsed = new URL(raw, document.baseURI);
      return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.href : "";
    } catch (error) {
      return "";
    }
  }

  function safeAssetUrl(raw) {
    return safeHttpUrl(raw);
  }

  function setOptionalField(key, text) {
    var field = document.querySelector('[data-field="' + key + '"]');
    var wrapper = document.querySelector('[data-optional="' + key + '"]');
    if (field) field.textContent = text;
    if (wrapper) wrapper.hidden = !text;
  }

  function setActionVisibility(action, visible) {
    var node = document.querySelector('[data-action="' + action + '"]');
    if (node) node.hidden = !visible;
    return node;
  }

  function setupLogo() {
    var logo = document.querySelector("[data-logo]");
    var logoUrl = safeAssetUrl(value("logoPath"));
    if (logo && logoUrl) {
      logo.src = logoUrl;
      logo.alt = value("brandName") || "KARAKARA";
    }
  }

  function setupBackground() {
    var background = document.querySelector(".site-background");
    var backgroundUrl = safeAssetUrl(value("backgroundPath"));
    if (!background || !backgroundUrl) return;
    background.style.backgroundImage =
      "linear-gradient(var(--color-overlay-top), var(--color-overlay-bottom)), url(\"" +
      backgroundUrl.replace(/["\\]/g, "\\$&") +
      "\")";
  }

  function setupActions() {
    var phoneRaw = value("phone");
    var phoneDigits = phoneRaw.replace(/[^\d+]/g, "");
    var call = setActionVisibility("call", phoneDigits.length > 1);
    if (call && phoneDigits.length > 1) call.href = "tel:" + phoneDigits;

    var location = setActionVisibility("location", Boolean(safeHttpUrl(value("mapsUrl"))));
    if (location) {
      var mapsUrl = safeHttpUrl(value("mapsUrl"));
      if (mapsUrl) {
        location.href = mapsUrl;
        location.setAttribute("aria-label", "Open KARAKARA in Google Maps");
      } else {
        location.removeAttribute("href");
      }
    }

    var actions = document.querySelector(".store-actions");
    if (actions) {
      var visibleCount = Array.from(actions.querySelectorAll("[data-action]")).filter(function (node) {
        return !node.hidden;
      }).length;
      actions.style.setProperty("--action-count", String(Math.max(visibleCount, 1)));
    }
  }

  function setupFoodpanda() {
    var link = document.querySelector("[data-foodpanda]");
    var foodpandaUrl = safeHttpUrl(value("foodpandaUrl"));
    if (!link) return;

    link.hidden = !foodpandaUrl;
    if (!foodpandaUrl) return;

    link.href = foodpandaUrl;
    link.target = "_self";
    link.setAttribute("aria-label", "Order from KARAKARA on Foodpanda");
  }

  function setupSocials() {
    var row = document.querySelector("[data-socials]");
    if (!row) return;

    var links = [
      { label: "Instagram", url: value("instagramUrl") },
      { label: "Facebook", url: value("facebookUrl") }
    ].filter(function (item) {
      return Boolean(safeHttpUrl(item.url));
    });

    row.replaceChildren();
    links.forEach(function (item) {
      var link = document.createElement("a");
      link.className = "social-link";
      link.href = safeHttpUrl(item.url);
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = item.label;
      row.appendChild(link);
    });
    row.hidden = links.length === 0;
  }

  function setupMenuLink() {
    var link = document.querySelector("[data-menu-link]");
    var menuUrl = safeAssetUrl(value("menuPdf"));
    if (!link) return;
    link.hidden = !menuUrl;
    if (menuUrl) link.href = menuUrl;
  }

  var brandName = value("brandName") || "KARAKARA";
  var country = value("country") || "Cambodia";
  var city = value("city") || "Siem Reap";
  var storeName = value("storeName") || brandName;

  setFields("brandName", brandName);
  setFields("country", country);
  setFields("city", city);
  setFields("storeName", storeName);
  setOptionalField("hours", value("hours"));
  setOptionalField("address", value("address"));

  var title = document.querySelector("title");
  if (title) title.textContent = brandName + " Cambodia / " + city;

  var year = document.querySelector("[data-footer-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  setupLogo();
  setupBackground();
  setupMenuLink();
  setupActions();
  setupFoodpanda();
  setupSocials();
}());
