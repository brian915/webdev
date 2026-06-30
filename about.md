---
title: All About Brian
layout: content
description: All About Brian
hero_title: All About Brian
intro_image: "assets/images/photos/revised_headshot.png"
intro_variant: about
hero_text: |
  <p>I’m a local web developer focused on practical websites for small businesses.<br />
  I have 30 years hands-on experience with web technology, and I use my background to help local businesses improve how they present themselves online.</p>
---
{% assign promo = site.data.promo %}
<div class="row justify-content-center">
  <div class="col-12 col-md-6 col-lg-4">
    <b>Simple Services</b>
    <br />{% if promo and promo.sale_price %}<span class="text-decoration-line-through text-muted">{{ promo.price }}</span>&nbsp;&nbsp;<span class="text-accent"><b><em>{{ promo.sale_price }}</em></b></span>{% elsif promo and promo.price %}<span class="text-accent"><b><em>{{ promo.price }}</em></b></span>{% endif %} Includes:
    <ul>
      <li>Design and development.</li>
      <li>Updating outdated websites.</li>
      <li>Mobile-friendly page layouts.</li>
      <li>Site launch assistance.</li>
    </ul>
  </div>

 <div class="col-12 col-md-6 col-lg-4">
    <b>Straight Forward Process</b>
    <ol>
      <li>Consultation</li>
      <li>Scope</li>
      <li>Build</li>
      <li>Review</li>
      <li>Launch!</li>
    </ol>
  </div>
</div>
