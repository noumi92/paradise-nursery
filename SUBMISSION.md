# Paradise Nursery — publishing and submission guide

## Current delivery status

The project repository is public at https://github.com/noumi92/paradise-nursery. The workflow deploys the app to https://noumi92.github.io/paradise-nursery/. See Actions for deployment status. The instructions below are retained for reproducing this setup.

## 1. Create the public repository

1. Sign in to GitHub and create a repository named `paradise-nursery`.
2. Set visibility to **Public**.
3. Leave the README, license, and gitignore initialization options unchecked because the project already has files.
4. Extract this package and open a terminal inside the `paradise-nursery` folder containing `package.json`.
5. Run the following commands, replacing `noumi92` first:

```bash
git init
git add .
git commit -m "Build Paradise Nursery React and Redux shopping application"
git branch -M main
git remote add origin https://github.com/noumi92/paradise-nursery.git
git push -u origin main
```

Use GitHub's normal sign-in flow when prompted. The `.gitignore` excludes dependencies and build output. Ensure the `.github/workflows/deploy.yml` file is committed; file managers may hide the `.github` folder.

## 2. Enable GitHub Pages

1. Open your repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Actions → Deploy Paradise Nursery to GitHub Pages**.
4. Select **Run workflow** on `main` if the initial push ran before Pages was enabled. You can also rerun the previous failed workflow after enabling Pages.
5. Wait for both the `build` and `deploy` jobs to succeed.
6. Open the actual website URL shown by the deployment. For the repository name above it normally follows `https://noumi92.github.io/paradise-nursery/`.
7. Verify it in a private/incognito browser window.

The provided workflow installs locked dependencies, runs Redux tests, builds the app, uploads `dist`, and deploys it. No paid hosting service is needed for this public-repository Pages workflow.

Official references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://vite.dev/guide/static-deploy

## 3. Submit these URLs

Use `blob/main` links for the source files so the grader can view the code. Copy the actual URLs from your published repository rather than submitting placeholders.

| Deliverable | URL pattern |
| --- | --- |
| Public repository | `https://github.com/noumi92/paradise-nursery` |
| Deployed app | `https://noumi92.github.io/paradise-nursery/` |
| README.md | `https://github.com/noumi92/paradise-nursery/blob/main/README.md` |
| AboutUs.jsx | `https://github.com/noumi92/paradise-nursery/blob/main/src/AboutUs.jsx` |
| App.css | `https://github.com/noumi92/paradise-nursery/blob/main/src/App.css` |
| App.jsx | `https://github.com/noumi92/paradise-nursery/blob/main/src/App.jsx` |
| CartSlice.jsx | `https://github.com/noumi92/paradise-nursery/blob/main/src/CartSlice.jsx` |
| ProductList.jsx | `https://github.com/noumi92/paradise-nursery/blob/main/src/ProductList.jsx` |
| CartItem.jsx | `https://github.com/noumi92/paradise-nursery/blob/main/src/CartItem.jsx` |
| Redux store | `https://github.com/noumi92/paradise-nursery/blob/main/src/store.js` |
| Redux Provider | `https://github.com/noumi92/paradise-nursery/blob/main/src/main.jsx` |

## 4. Quick grading walkthrough

1. Open Home: company name, background photo, company paragraphs, and Get Started are visible.
2. Click Get Started: three categories appear, each containing six unique plants.
3. Add Snake Plant ($18) and ZZ Plant ($22): both buttons become disabled; badge becomes 2.
4. Open Cart: total plants is 2, total cost is $40, and each item displays its thumbnail, name, unit price, quantity, and line total.
5. Increase Snake Plant: quantity becomes 2, its line total becomes $36, badge and plant count become 3, and total becomes $58.
6. Decrease Snake Plant: quantity returns to 1, badge returns to 2, and total returns to $40.
7. Delete ZZ Plant: badge becomes 1 and total becomes $18.
8. Select Checkout: Coming Soon is displayed.
9. Continue Shopping: the catalog opens; ZZ Plant can be added again.
10. Decrease the last remaining unit of Snake Plant: it is removed and empty totals are $0 and 0 plants.

Review and understand the code before submission and follow your course's rules for outside assistance. Screenshots are supporting evidence; the required live repository and app URLs must still be published and submitted.
