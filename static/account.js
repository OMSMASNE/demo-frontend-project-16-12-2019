/*
    Copyright (C) 2019 OM SANTOSHKUMAR MASNE. All Rights Reserved.
    Licensed under the GNU Affero General Public License v3.0 only (AGPL-3.0-only) license.
    See License.txt in the project root for license information.
*/

document.addEventListener("DOMContentLoaded", startup);

function startup()
{
    document.getElementById('account-form').addEventListener("submit", form_submit);
}

function form_submit(e)
{
    alert('Form submitted!');
    e.preventDefault();
}
