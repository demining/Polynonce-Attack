# Polynonce Attack

---


* Tutorial: https://youtu.be/7nKs_KHtyn4
* Tutorial: https://cryptodeeptech.ru/polynonce-attack


---


<p>In this article, we will again touch on the topic:&nbsp;<strong><a href="https://cryptodeeptech.ru/blockchain-attack-vectors" target="_blank" rel="noreferrer noopener">“Bitcoin’s Critical Vulnerability”</a></strong>&nbsp;and use the brand new attack of 2023&nbsp;<a href="https://cryptodeeptech.ru/polynonce-attack" target="_blank" rel="noreferrer noopener"><strong>“POLYNONCE ATTACK”</strong></a>&nbsp;on all three examples .&nbsp;The very first mention of this attack is described in an article from&nbsp;<strong><a href="https://research.kudelskisecurity.com/2023/03/06/polynonce-a-tale-of-a-novel-ecdsa-attack-and-bitcoin-tears/" target="_blank" rel="noreferrer noopener">“Kudelski Security”</a></strong>&nbsp;.<strong><a href="https://cryptodeeptech.ru/blockchain-attack-vectors" target="_blank" rel="noreferrer noopener"></a></strong><a href="https://cryptodeeptech.ru/polynonce-attack" target="_blank" rel="noreferrer noopener"><strong></strong></a><strong><a href="https://research.kudelskisecurity.com/2023/03/06/polynonce-a-tale-of-a-novel-ecdsa-attack-and-bitcoin-tears/" target="_blank" rel="noreferrer noopener"></a></strong></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-140-1024x309.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2920" width="167" height="51"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-141-1024x372.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2921"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-142-1024x498.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2922"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-159-1024x403.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-3043"><figcaption class="wp-element-caption"><a href="https://research.kudelskisecurity.com/2023/03/06/polynonce-a-tale-of-a-novel-ecdsa-attack-and-bitcoin-tears/" target="_blank" rel="noreferrer noopener"><code>https://research.kudelskisecurity.com/2023/03/06/polynonce-a-tale-of-a-novel-ecdsa-attack-and-bitcoin-tears/</code></a></figcaption></figure></div>


<p>As a practical basis, we will take materials from our earlier article&nbsp;<a href="https://cryptodeeptech.ru/endomorphism" target="_blank" rel="noreferrer noopener">“&nbsp;<strong>Speed ​​up secp256k1 with endomorphism”</strong></a>&nbsp;where the values ​​​​on the secp256k1 curve from&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;hide the depth of uncertainty of Bitcoin elliptic curves.</p>



<blockquote class="wp-block-quote">
<p>We can reveal a lot<code>Binary number (4 digits):&nbsp;<strong>"1111"</strong>&nbsp;// Hex number<em>:&nbsp;</em><strong>"F"</strong><em>&nbsp;//</em></code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-143.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2923" width="856" height="757"><figcaption class="wp-element-caption"><a href="https://www.rapidtables.com/convert/number/hex-to-binary.html" target="_blank" rel="noreferrer noopener"><code>https://www.rapidtables.com/convert/number/hex-to-binary.html</code></a></figcaption></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We also know perfectly well the order of the&nbsp;<strong><a href="https://cryptodeep.ru/endomorphism/" target="_blank" rel="noreferrer noopener">secp256k1</a></strong>&nbsp;curve which consists of&nbsp;<strong>128 bits&nbsp;</strong><em>Binary number (4 digits):&nbsp;</em><strong>“1111”&nbsp;</strong><em>// Hex number:&nbsp;</em><strong>“F”&nbsp;</strong><em>//</em></p>



<pre class="wp-block-code"><code>n = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141
</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<pre class="wp-block-code"><code>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111010111010101011101101110011100110101011110100100010100000001110111011111111010010010111101000110011010000001101100100000101000001</code></pre>



<p>We see that the polynomial as a unit in the binary code of an arbitrarily high degree of 128 bits modulo</p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-147-1024x521.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2948"></figure></div>


<p><a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener"><code>Speed ​​up secp256k1 with endomorphism</code></a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Given this fact, the initial bit of the Bitcoin private key will be&nbsp;<em>Binary number (4 digits):&nbsp;</em><strong>“1111”&nbsp;</strong><em>// Hex number:&nbsp;</em><strong>“F”&nbsp;</strong><em>//</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">For a theoretical basis, we will take materials:</h2>



<h2 class="wp-block-heading has-text-align-center"><a href="https://attacksafe.ru/polynonce-attack-on-bitcoin/" target="_blank" rel="noreferrer noopener">“Polynonce Attack on Bitcoin”</a></h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-146.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2940" width="871" height="1298"><figcaption class="wp-element-caption"><a href="https://attacksafe.ru/polynonce-attack-on-bitcoin" target="_blank" rel="noreferrer noopener"><code>https://attacksafe.ru/polynonce-attack-on-bitcoin</code></a></figcaption></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider an example with a Bitcoin Address:</p>
</blockquote>



<p><a href="https://btc1.trezor.io/address/1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB" target="_blank" rel="noreferrer noopener"><strong>1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-44.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2699"></figure>



<p><a href="https://btc1.trezor.io/tx/929d565c386a279cf7a0382ba48cab1f72d62e7cfb3ab97b4f211d5673bc4441" target="_blank" rel="noreferrer noopener"><strong>929d565c386a279cf7a0382ba48cab1f72d62e7cfb3ab97b4f211d5673bc4441</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-45-1024x200.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2700"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-85-1024x364.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2792"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>02000000019e3de154f8b473a796b9e39dd279dff1d907a4d27a1d8b23a055f97b08ad4c6e310000006b483045022100b29bdfc27ddf6bebd0e77c84b31dc1bc64b5b2276c8d4147421e96ef85467e8d02204ddd8ff0ffa19658e3b417be5f64d9c425a4d9fcd76238b8538c1d605b229baf0121027b06fe78e39ced37586c42c9ac38d7b2d88ccdd4cd1bb38816c0933f9b8db695ffffffff0169020000000000001600145fc8e854994406f93ea5c7f3abccc5d319ae2a3100000000</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s go to the official website:&nbsp;&nbsp;<strong><a href="https://colab.research.google.com/" target="_blank" rel="noreferrer noopener">https://colab.research.google.com</a></strong></p>



<blockquote class="wp-block-quote">
<blockquote class="wp-block-quote">
<p><em>Select the option&nbsp;&nbsp;</em><strong>“Upload notebook”</strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-50.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2709" width="861" height="1478"></figure></div></blockquote>



<blockquote class="wp-block-quote">
<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center"><em>Download the file:&nbsp;&nbsp;</em><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/POLYNONCE_ATTACK.ipynb" target="_blank" rel="noreferrer noopener">POLYNONCE_ATTACK.ipynb</a></strong></p>
</blockquote>



<blockquote class="wp-block-quote">
<hr class="wp-block-separator has-alpha-channel-opacity">
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-52.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2711"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center">Load&nbsp;<code>HEX</code>the -data through the utility&nbsp;<code>echo</code>&nbsp;and save it to a file:&nbsp;<strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!echo '02000000019e3de154f8b473a796b9e39dd279dff1d907a4d27a1d8b23a055f97b08ad4c6e310000006b483045022100b29bdfc27ddf6bebd0e77c84b31dc1bc64b5b2276c8d4147421e96ef85467e8d02204ddd8ff0ffa19658e3b417be5f64d9c425a4d9fcd76238b8538c1d605b229baf0121027b06fe78e39ced37586c42c9ac38d7b2d88ccdd4cd1bb38816c0933f9b8db695ffffffff0169020000000000001600145fc8e854994406f93ea5c7f3abccc5d319ae2a3100000000' &gt; RawTX.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-53.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2716"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center"><strong>To implement the attack, we will use the software</strong></p>



<p class="has-text-align-center">&nbsp;<strong><a href="https://attacksafe.ru/software/" target="_blank" rel="noreferrer noopener">“ATTACKSAFE SOFTWARE”</a></strong></p>


<div class="wp-block-image">
<figure class="aligncenter"><a href="https://attacksafe.ru/software/" target="_blank" rel="noreferrer noopener"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-14.png" alt="Implement Frey-Rück Attack to get the secret key &quot;K&quot; (NONCE)" class="wp-image-705"></a><figcaption class="wp-element-caption"><strong><code>www.attacksafe.ru/software</code></strong></figcaption></figure></div>


<h2 class="wp-block-heading">Access rights:</h2>



<pre class="wp-block-code"><code>!chmod +x attacksafe</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-54.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2717"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Application:</h2>



<pre class="wp-block-code"><code>!./attacksafe -help</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-57-1024x784.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2720"></figure>



<pre class="wp-block-code"><code>  -version:  software version 
  -list:     list of bitcoin attacks
  -tool:     indicate the attack
  -gpu:      enable gpu
  -time:     work timeout
  -server:   server mode
  -port:     server port
  -open:     open file
  -save:     save file
  -search:   vulnerability search
  -stop:     stop at mode
  -max:      maximum quantity in mode
  -min:      minimum quantity per mode
  -speed:    boost speed for mode
  -range:    specific range
  -crack:    crack mode
  -field:    starting field
  -point:    starting point
  -inject:   injection regimen
  -decode:   decoding mode</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -version</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-60.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2724"></figure>



<pre class="wp-block-code"><code>Version 5.3.3. [ATTACKSAFE SOFTWARE, © 2023]</code></pre>



<blockquote class="wp-block-quote">
<p><code>"ATTACKSAFE SOFTWARE"</code>&nbsp;includes all popular attacks on Bitcoin.</p>
</blockquote>



<h2 class="wp-block-heading">Let’s run a list of all attacks:</h2>



<pre class="wp-block-code"><code>!./attacksafe -list</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-62-1024x758.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2728"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s choose<code>&nbsp;-tool: polynonce_attack</code></p>



<blockquote class="wp-block-quote">
<p>To get a specific&nbsp;<code>HEX</code>value&nbsp;<code>R,S,Z</code>for the signature&nbsp;<code>ECDSA</code>, we previously added data&nbsp;&nbsp;<code>RawTX</code>&nbsp;through the utility&nbsp;<code>echo</code>to a text document and saved it as a file&nbsp;<code>RawTX.txt</code></p>
</blockquote>



<pre class="wp-block-code"><code>02000000019e3de154f8b473a796b9e39dd279dff1d907a4d27a1d8b23a055f97b08ad4c6e310000006b483045022100b29bdfc27ddf6bebd0e77c84b31dc1bc64b5b2276c8d4147421e96ef85467e8d02204ddd8ff0ffa19658e3b417be5f64d9c425a4d9fcd76238b8538c1d605b229baf0121027b06fe78e39ced37586c42c9ac38d7b2d88ccdd4cd1bb38816c0933f9b8db695ffffffff0169020000000000001600145fc8e854994406f93ea5c7f3abccc5d319ae2a3100000000</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Launch&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool polynonce_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-64-1024x182.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2734"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-65-1024x179.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2736"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center">In order to calculate the private key to a Bitcoin Wallet from a file,&nbsp;&nbsp;<code>SignatureRSZ.csv</code>we will install&nbsp;<strong><a href="https://cryptodeeptech.ru/install-sagemath-in-google-colab/" target="_blank" rel="noreferrer noopener">SageMath</a></strong></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-27.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2188" width="864" height="245"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-28-1024x445.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2189"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p class="has-text-align-center">Earlier we published&nbsp;<a href="https://cryptodeeptech.ru/install-sagemath-in-google-colab/" target="_blank" rel="noreferrer noopener">an article</a>&nbsp;, download&nbsp;&nbsp;<code>tar-file</code>:&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/sage-9.3-Ubuntu_20.04-x86_64.tar.bz2" target="_blank" rel="noreferrer noopener"><strong>sage-9.3-Ubuntu_20.04-x86_64.tar.bz2</strong></a></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!wget https://cryptodeeptech.ru/sage-9.3-Ubuntu_20.04-x86_64.tar.bz2
!tar -xf sage-9.3-Ubuntu_20.04-x86_64.tar.bz2</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-67-1024x319.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2744"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s go through the directory:</em></p>
</blockquote>



<pre class="wp-block-code"><code>cd SageMath/</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-68-1024x723.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2746"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Run&nbsp;&nbsp;</em><strong>relocate-once.py&nbsp;</strong><em>&nbsp;with the command:</em><code>Python-script:</code><em>&nbsp;</em><strong></strong><em></em></p>
</blockquote>



<pre class="wp-block-code"><code>!python3 relocate-once.py</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-69-1024x457.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2750"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Move&nbsp;<code>"AttackSafe"</code>to&nbsp;<code>"SignatureRSZ.csv"</code>folder<code>"SageMath"</code></p>
</blockquote>



<pre class="wp-block-code"><code>!mv '/content/attacksafe' '/content/SageMath/attacksafe'
!mv '/content/SignatureRSZ.csv' '/content/SageMath/SignatureRSZ.csv'</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-70-1024x698.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2753"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-156-1024x344.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-3024"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Download the script&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;from Dario Clavijo through the utility&nbsp;<code>wget</code></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/20PolynonceAttack/crack_weak_ECDSA_nonces_with_LLL.py</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-72-1024x424.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2756"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Now let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-74-1024x505.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2760"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;specifying the parameters<strong><code>128 bits 4 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 128 4 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-75-1024x442.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2766"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;<code>HEX</code>the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-78.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2769" width="912" height="207"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0xf0a3e31646ce147bbd79bb6e45e6e9c8c4e51c535918c9b4cdca9528eb62172d</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example1/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><strong>GITHUB</strong></a></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-150.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2972" width="917" height="1234"><figcaption class="wp-element-caption"><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example1/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><code>https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example1/POLYNONCE.py</code></a></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-149.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2963"></figure>



<blockquote class="wp-block-quote">
<p>We received four identical initial<code>128 bits</code></p>
</blockquote>



<pre class="wp-block-code"><code>POLYNONCE &gt;&gt; 93e43392cb31d5d1f75175ee64ce16b7 efc86216627af576c29c9c52a0fd10fe
POLYNONCE &gt;&gt; 93e43392cb31d5d1f75175ee64ce16b7 f88ff4c8a9ea4b61b1e087d0c0988826
POLYNONCE &gt;&gt; 93e43392cb31d5d1f75175ee64ce16b7 6849e83cd03d103bcc37aca8323c8d2f
POLYNONCE &gt;&gt; 93e43392cb31d5d1f75175ee64ce16b7 efc86216627af576c29c9c52a0fd10fe</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed to us the same initial bits&nbsp;<code>128 bits</code>, since the initial bits of the private key to the Bitcoin Wallet begin with<em><code>Binary number (4 digits):&nbsp;</code></em><strong><code>"1111"</code></strong><em><code>&nbsp;// Hex number:&nbsp;</code></em><strong><code>"F"</code></strong><em><code>&nbsp;//</code></em></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p>Install the module<code>bitcoin</code></p>
</blockquote>



<pre class="wp-block-code"><code>!pip3 install bitcoin</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-86-1024x219.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2799"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-87.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2800"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:<code>PrivateKeyAddr.txt</code></p>
</blockquote>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-88.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2801"><figcaption class="wp-element-caption"><code>f0a3e31646ce147bbd79bb6e45e6e9c8c4e51c535918c9b4cdca9528eb62172d:1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB</code></figcaption></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB
WIF:  L5HV2GiosXifcmijGCpFWdYiMRuXh4x4JVK29urGjfAWyasBYoDX
HEX:  f0a3e31646ce147bbd79bb6e45e6e9c8c4e51c535918c9b4cdca9528eb62172d</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-bitaddress.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2779"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB">https://www.blockchain.com/en/explorer/addresses/btc/1DxzwX4qC9PsWDSAzuWbJRzEwdGx3n9CJB</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-106.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2853" width="873" height="253"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-110.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2859"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-113-1024x217.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2864"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 3699.40</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">Let’s look at other examples:</h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><code><strong>№2</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #2 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/137a6fqt13bhtAkGZWrgcGM98NLCotszR2" target="_blank" rel="noreferrer noopener">137a6fqt13bhtAkGZWrgcGM98NLCotszR2</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-82.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2788"></figure>



<p><a href="https://btc1.trezor.io/tx/c1da9d117e15883ba41539f558ac870f53865ea00f68a8ff8bc7e8a9ee67099b" target="_blank" rel="noreferrer noopener"><strong>c1da9d117e15883ba41539f558ac870f53865ea00f68a8ff8bc7e8a9ee67099b</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-83-1024x193.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2789"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-84-1024x363.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2790"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>010000000103ebc5c4b817124d45ad15e398ec32e9b9b7549c1fc10300ecbf36648c3cb5d42c0000006a47304402204e97dae0ab6e4eee9529f68687907c05db9037d9fbdba78dd01a3338a48d95b602207794cb7aa308243dfbdd5c20225777cd6e01bd7c4f76bf36948aa29290129c2b0121036360352efcff6a823eabb25578a29392eab4d302955fd54ece900578d2ab83b8ffffffff0162020000000000001976a914154813f71552c59487efa3b16d62bfb009dc5f1e88ac00000000</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the first example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-157.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-3027"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Load&nbsp;&nbsp;</em><code>HEX</code><em> the -data through the utility&nbsp;&nbsp;</em><code>echo</code><em>&nbsp;and save it to a file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!echo '010000000103ebc5c4b817124d45ad15e398ec32e9b9b7549c1fc10300ecbf36648c3cb5d42c0000006a47304402204e97dae0ab6e4eee9529f68687907c05db9037d9fbdba78dd01a3338a48d95b602207794cb7aa308243dfbdd5c20225777cd6e01bd7c4f76bf36948aa29290129c2b0121036360352efcff6a823eabb25578a29392eab4d302955fd54ece900578d2ab83b8ffffffff0162020000000000001976a914154813f71552c59487efa3b16d62bfb009dc5f1e88ac00000000' &gt; RawTX.txt
</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-94-1024x393.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2820"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">Launch&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool polynonce_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-95-1024x248.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2825"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-96-1024x177.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2830"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-98-1024x494.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2837"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>128 bits 4 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 128 4 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-99-1024x530.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2841"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-102.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2847" width="907" height="312"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0xff0178fa717374f7e74d43f00150748967ea04b64241ec10a10f62debb70868c</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example2/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><strong>GITHUB</strong></a></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-152.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2991" width="916" height="1250"><figcaption class="wp-element-caption"><code><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example2/POLYNONCE.py" target="_blank" rel="noreferrer noopener">https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example2/POLYNONCE.py</a></code></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-153.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2993"></figure>



<blockquote class="wp-block-quote">
<p>We received four identical initial<code>128 bits</code></p>
</blockquote>



<pre class="wp-block-code"><code>POLYNONCE &gt;&gt; 5220dae0c281e1115b4dd69ea3500f70 c5f6da6334586ed2bdc88a05f37bcf95
POLYNONCE &gt;&gt; 5220dae0c281e1115b4dd69ea3500f70 6f82fbd847c138ab48e778135e908149
POLYNONCE &gt;&gt; 5220dae0c281e1115b4dd69ea3500f70 5541022f8aeac81e5ce62e018d1cd722
POLYNONCE &gt;&gt; 5220dae0c281e1115b4dd69ea3500f70 80e88efaff419ecd84d7ded17dc548a7</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed to us the same initial bits&nbsp;<code>128 bits</code>, since the initial bits of the private key to the Bitcoin Wallet begin with<em><code>Binary number (4 digits):&nbsp;</code></em><strong><code>"1111"</code></strong><em><code>&nbsp;// Hex number:&nbsp;</code></em><strong><code>"F"</code></strong><em><code>&nbsp;//</code></em></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-103-1024x451.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2848"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-104.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2850"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-large-font-size">Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 137a6fqt13bhtAkGZWrgcGM98NLCotszR2
WIF:  L5mQfFuzR3rzLtneJ7Tcv64JrHjCpK64UN4JRdGDxCUTbQ8NfHxo
HEX:  ff0178fa717374f7e74d43f00150748967ea04b64241ec10a10f62debb70868c</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-bitaddress-2.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2877"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/137a6fqt13bhtAkGZWrgcGM98NLCotszR2">https://www.blockchain.com/en/explorer/addresses/btc/137a6fqt13bhtAkGZWrgcGM98NLCotszR2</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-114.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2867" width="838" height="267"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-116.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2870"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-117-1024x199.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2871"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 1133.73</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">Let’s look at other examples:</h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><code><strong>№3</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #3 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/1HxrEeC2X8UEcSvsemPJtTqrnbAetGWYUt" target="_blank" rel="noreferrer noopener">1HxrEeC2X8UEcSvsemPJtTqrnbAetGWYUt</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-119.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2883"></figure>



<p><a href="https://btc1.trezor.io/tx/fa80af660fc444d87853137506df02e5c75e8c2bf75dc44589b60356867a6d98" target="_blank" rel="noreferrer noopener"><strong>fa80af660fc444d87853137506df02e5c75e8c2bf75dc44589b60356867a6d98</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-120-1024x193.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2884"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-121-1024x353.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2885"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>01000000016eb80d35b08164302e49f88d8f86bf2827a91a5650149be38f4f73751ff41437060000006a473044022043d4c025a0f3be366a0d768c721b9b9191e0c3db6f2c6bfe34e8fb24af7f379102205a4fe2cc6944e00309c35619ff1242301b84d4728b863f97326f56dbd7a782220121027ccccf5f56ed78c2a761721ff3da0f76b792fbe4eae2ac73e7b4651bc3ef19cdffffffff01c057010000000000232103bec42e5d718b0e5b3853243c9bcf00dd671a335b0eb99fd8ca32f8d5784a9476ac00000000</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the second example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-158.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-3030"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Load&nbsp;&nbsp;</em><code>HEX</code><em> the -data through the utility&nbsp;&nbsp;</em><code>echo</code><em>&nbsp;and save it to a file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!echo '01000000016eb80d35b08164302e49f88d8f86bf2827a91a5650149be38f4f73751ff41437060000006a473044022043d4c025a0f3be366a0d768c721b9b9191e0c3db6f2c6bfe34e8fb24af7f379102205a4fe2cc6944e00309c35619ff1242301b84d4728b863f97326f56dbd7a782220121027ccccf5f56ed78c2a761721ff3da0f76b792fbe4eae2ac73e7b4651bc3ef19cdffffffff01c057010000000000232103bec42e5d718b0e5b3853243c9bcf00dd671a335b0eb99fd8ca32f8d5784a9476ac00000000' &gt; RawTX.txt
</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-124-1024x468.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2889"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">Launch&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool polynonce_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-125-1024x252.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2890"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool polynonce_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-127-1024x184.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2892"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-98-1024x494.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2837"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>128 bits 4 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 128 4 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-131-1024x530.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2896"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-132.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2898" width="922" height="342"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0xfbc50a7158b3d9fd7fd58fe0874f20c10c650975dc118163debf442a44203fdf</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example3/POLYNONCE.py" target="_blank" rel="noreferrer noopener">GITHUB</a></strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-155.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2998" width="918" height="1219"><figcaption class="wp-element-caption"><a href="https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example3/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><code>https://github.com/demining/CryptoDeepTools/blob/main/20PolynonceAttack/example3/POLYNONCE.py</code></a></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-154.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2997"></figure>



<blockquote class="wp-block-quote">
<p>We received four identical initial<code>128 bits</code></p>
</blockquote>



<pre class="wp-block-code"><code>POLYNONCE &gt;&gt; d7460c5b1a98f6d0443ae1cfe1f17814 fbc50a7158b3d9fd7fd58fe0874f20c1
POLYNONCE &gt;&gt; d7460c5b1a98f6d0443ae1cfe1f17814 d4de8d539655ecf0d50fd32187c3c467
POLYNONCE &gt;&gt; d7460c5b1a98f6d0443ae1cfe1f17814 6726aea1a6fd64d82dc657670352de72
POLYNONCE &gt;&gt; d7460c5b1a98f6d0443ae1cfe1f17814 89df16fd387156b39adca9a92464de18</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed to us the same initial bits&nbsp;<code>128 bits</code>, since the initial bits of the private key to the Bitcoin Wallet begin with<em><code>Binary number (4 digits):&nbsp;</code></em><strong><code>"1111"</code></strong><em><code>&nbsp;// Hex number:&nbsp;</code></em><strong><code>"F"</code></strong><em><code>&nbsp;//</code></em></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-103-1024x451.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2848"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>



<figure class="wp-block-image"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-133.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2900"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-large-font-size">Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 1HxrEeC2X8UEcSvsemPJtTqrnbAetGWYUt
WIF:  L5f7p5bReuXLm3d7rFkpPyGQ1GNpiGuj8QuQ6rNCKXC9bs3J9GEY
HEX:  fbc50a7158b3d9fd7fd58fe0874f20c10c650975dc118163debf442a44203fdf</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-bitaddress-3.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2906"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/1HxrEeC2X8UEcSvsemPJtTqrnbAetGWYUt">https://www.blockchain.com/en/explorer/addresses/btc/1HxrEeC2X8UEcSvsemPJtTqrnbAetGWYUt</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-137.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2909" width="846" height="258"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-138.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2910"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/image-139-1024x224.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2911"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 459.24</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Literature:</h2>



<ul>
<li><em>A Novel Related Nonce Attack for ECDSA, <a href="https://www.researchgate.net/profile/Marco-Macchetti" target="_blank" rel="noreferrer noopener">Marco Macchetti</a> <strong>[Kudelski Security, Switzerland] (2023)</strong></em></li>
</ul>



<ul>
<li><em>Gallant, Robert P., Robert J. Lambert, and Scott A. Wanston.&nbsp;</em><strong><em>“Faster point multiplication on elliptic curves with efficient endomorphisms”</em></strong><em>&nbsp;.&nbsp;Annual International Conference on Cryptology, pp. 190–200.&nbsp;Springer, Berlin, Heidelberg, (2001)</em></li>



<li><em>Hankerson, Darrell, Alfred J. Menezes, and Scott Wanston.&nbsp;</em><strong><em>“A Guide to Elliptic Curve Cryptography”</em></strong><em>&nbsp;.&nbsp;Computer Reviews 46, no.&nbsp;1 (2005)</em></li>



<li><em>Hal Finney.&nbsp;bitcointalk –&nbsp;&nbsp;</em><strong><em>“Acceleration of signature verification”</em></strong><em>&nbsp;.&nbsp;(2011)&nbsp;</em>&nbsp;<a href="https://bitcointalk.org/index.php?topic=3238.0" target="_blank" rel="noreferrer noopener">https://bitcointalk.org/index.php?topic=3238.0</a></li>



<li><em>Blahut, Richard E.&nbsp;&nbsp;</em><strong><em>“Cryptography and Secure Communication”</em></strong><em>&nbsp;.&nbsp;Cambridge University Press, (2014)</em></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/20PolynonceAttack" target="_blank" rel="noreferrer noopener">Source</a></strong></p>



<p><strong><a href="https://attacksafe.ru/software" target="_blank" rel="noreferrer noopener">ATTACKSAFE SOFTWARE</a></strong></p>



<p><strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener">Telegram: https://t.me/cryptodeeptech</a></strong></p>



<p><strong><a href="https://youtu.be/7nKs_KHtyn4" target="_blank" rel="noreferrer noopener">Video: https://youtu.be/7nKs_KHtyn4</a></strong></p>



<p><strong><a href="https://cryptodeeptech.ru/polynonce-attack" target="_blank" rel="noreferrer noopener">Source: https://cryptodeeptech.ru/polynonce-attack</a></strong></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key - CRYPTO DEEP TECH_files/038-1024x576.png" alt="POLYNONCE ATTACK use BITCOIN signatures as a polynomial to an arbitrarily high power of 128 bits to obtain a private key" class="wp-image-2915"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">
	</div><!-- .entry-content -->

