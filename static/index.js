/*
    Copyright (C) 2019 OM SANTOSHKUMAR MASNE. All Rights Reserved.
    Licensed under the GNU Affero General Public License v3.0 only (AGPL-3.0-only) license.
    See License.txt in the project root for license information.
*/

document.addEventListener("DOMContentLoaded", startup);

function startup()
{
    document.getElementById('scroll-to-top-btn').addEventListener("click", scroll_to_top);
}

function scroll_to_top()
{
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
      });
}

document.addEventListener('scroll', () => {
    if(window.scrollY > 200)
    {
        document.getElementById('scroll-to-top-btn-container').style.display = 'block';
    }
    else
    {
        document.getElementById('scroll-to-top-btn-container').style.display = 'none';
    }
});
