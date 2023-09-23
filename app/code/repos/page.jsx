"use client";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
// async function fetchRepos() {
//   const response = await fetch(
//     "https://api.github.com/users/bradtraversy/repos",
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

//   const repos = await response.json();
//   return repos;
// }

const ReposPage = async () => {
  // const repos = await fetchRepos();
  const repos = [repo];
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;

var repo = {
  id: 276689002,
  node_id: "MDEwOlJlcG9zaXRvcnkyNzY2ODkwMDI=",
  name: "breaking-bad-cast",
  full_name: "bradtraversy/breaking-bad-cast",
  private: false,
  owner: {
    login: "bradtraversy",
    id: 5550850,
    node_id: "MDQ6VXNlcjU1NTA4NTA=",
    avatar_url: "https://avatars.githubusercontent.com/u/5550850?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/bradtraversy",
    html_url: "https://github.com/bradtraversy",
    followers_url: "https://api.github.com/users/bradtraversy/followers",
    following_url:
      "https://api.github.com/users/bradtraversy/following{/other_user}",
    gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/bradtraversy/subscriptions",
    organizations_url: "https://api.github.com/users/bradtraversy/orgs",
    repos_url: "https://api.github.com/users/bradtraversy/repos",
    events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/bradtraversy/received_events",
    type: "User",
    site_admin: false,
  },
  html_url: "https://github.com/bradtraversy/breaking-bad-cast",
  description: "App to show cast info for breaking bad",
  fork: false,
  url: "https://api.github.com/repos/bradtraversy/breaking-bad-cast",
  forks_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/forks",
  keys_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/collaborators{/collaborator}",
  teams_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/teams",
  hooks_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/hooks",
  issue_events_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/issues/events{/number}",
  events_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/events",
  assignees_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/branches{/branch}",
  tags_url: "https://api.github.com/repos/bradtraversy/breaking-bad-cast/tags",
  blobs_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/languages",
  stargazers_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/stargazers",
  contributors_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/contributors",
  subscribers_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/subscribers",
  subscription_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/subscription",
  commits_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/compare/{base}...{head}",
  merges_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/merges",
  archive_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/downloads",
  issues_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/labels{/name}",
  releases_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/bradtraversy/breaking-bad-cast/deployments",
  created_at: "2020-07-02T15:58:09Z",
  updated_at: "2023-09-10T06:49:07Z",
  pushed_at: "2023-07-19T05:23:17Z",
  git_url: "git://github.com/bradtraversy/breaking-bad-cast.git",
  ssh_url: "git@github.com:bradtraversy/breaking-bad-cast.git",
  clone_url: "https://github.com/bradtraversy/breaking-bad-cast.git",
  svn_url: "https://github.com/bradtraversy/breaking-bad-cast",
  homepage: null,
  size: 1611,
  stargazers_count: 251,
  watchers_count: 251,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 161,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 5,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: "public",
  forks: 161,
  open_issues: 5,
  watchers: 251,
  default_branch: "master",
};
