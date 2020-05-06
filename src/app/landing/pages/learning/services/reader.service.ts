import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  html = `
  <h1>&ldquo;Come celebrate with me that everyday something has tried to kill me and has failed.&rdquo; -Lucille Clifton</h1>
  <p>&nbsp;</p>
  <p id="2c87" class="id iq ap ce if b ig ih ir ii ij is ik il it im in iu io ip iv ia hn" data-selectable-paragraph="">My mom&rsquo;s laugh shakes the room. As a kid I sometimes wondered if she had to practice to get it like that, in the mirror throwing her head back, tuning the pitch of it, perfecting the way it projected. It used to annoy me. I&rsquo;d be sequestered in my room, writing depressive adolescent poetry, and then it would crack through the walls in the hours she spent on the phone with my many aunts.&nbsp;<em class="iw">Nothing is that funny</em>, I&rsquo;d think to myself.</p>
  <p id="f470" class="id iq ap ce if b ig ix ir ii iy is ik iz it im ja iu io jb iv ia hn" data-selectable-paragraph="">At dawn on New Year&rsquo;s Day 2014, after supplying my champagne drunk friends with enough blankets to make a bed of the floor, I went to my bedroom, closed the door behind me, and fell to the ground laughing. It erupted from somewhere deep in my belly and caused my whole body to</p>
  <p id="2c87" class="id iq ap ce if b ig ih ir ii ij is ik il it im in iu io ip iv ia hn" data-selectable-paragraph="">My mom&rsquo;s laugh shakes the room. As a kid I sometimes wondered if she had to practice to get it like that, in the mirror throwing her head back, tuning the pitch of it, perfecting the way it projected. It used to annoy me. I&rsquo;d be sequestered in my room, writing depressive adolescent poetry, and then it would crack through the walls in the hours she spent on the phone with my many aunts.&nbsp;<em class="iw">Nothing is that funny</em>, I&rsquo;d think to myself.</p>
  <p id="f470" class="id iq ap ce if b ig ix ir ii iy is ik iz it im ja iu io jb iv ia hn" data-selectable-paragraph="">At dawn on New Year&rsquo;s Day 2014, after supplying my champagne drunk friends with enough blankets to make a bed of the floor, I went to my bedroom, closed the door behind me, and fell to the ground laughing. It erupted from somewhere deep in my belly and caused my whole body to</p>
  <p id="2c87" class="id iq ap ce if b ig ih ir ii ij is ik il it im in iu io ip iv ia hn" data-selectable-paragraph="">My mom&rsquo;s laugh shakes the room. As a kid I sometimes wondered if she had to practice to get it like that, in the mirror throwing her head back, tuning the pitch of it, perfecting the way it projected. It used to annoy me. I&rsquo;d be sequestered in my room, writing depressive adolescent poetry, and then it would crack through the walls in the hours she spent on the phone with my many aunts.&nbsp;<em class="iw">Nothing is that funny</em>, I&rsquo;d think to myself.</p>
  <p id="f470" class="id iq ap ce if b ig ix ir ii iy is ik iz it im ja iu io jb iv ia hn" data-selectable-paragraph="">At dawn on New Year&rsquo;s Day 2014, after supplying my champagne drunk friends with enough blankets to make a bed of the floor, I went to my bedroom, closed the door behind me, and fell to the ground laughing. It erupted from somewhere deep in my belly and caused my whole body to</p>
  <p id="2c87" class="id iq ap ce if b ig ih ir ii ij is ik il it im in iu io ip iv ia hn" data-selectable-paragraph="">My mom&rsquo;s laugh shakes the room. As a kid I sometimes wondered if she had to practice to get it like that, in the mirror throwing her head back, tuning the pitch of it, perfecting the way it projected. It used to annoy me. I&rsquo;d be sequestered in my room, writing depressive adolescent poetry, and then it would crack through the walls in the hours she spent on the phone with my many aunts.&nbsp;<em class="iw">Nothing is that funny</em>, I&rsquo;d think to myself.</p>
  <p id="f470" class="id iq ap ce if b ig ix ir ii iy is ik iz it im ja iu io jb iv ia hn" data-selectable-paragraph="">At dawn on New Year&rsquo;s Day 2014, after supplying my champagne drunk friends with enough blankets to make a bed of the floor, I went to my bedroom, closed the door behind me, and fell to the ground laughing. It erupted from somewhere deep in my belly and caused my whole body to</p>
  `;

  constructor() { }

  getHTML() {
    return this.html;
  }
}
