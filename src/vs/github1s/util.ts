/**
 * @file github1s common utils
 * @autor fezhang
 */

interface GitHubRouteState {
  owner: string;
  repo: string;
  type: string;
  branch: string;
  path: string;
};

export const parseGitHubUrl = (url: string): GitHubRouteState => {
  const urlObj = new window.URL(url);
  const parts = urlObj.pathname.split('/').filter(Boolean);
  const hasFileType = ['tree', 'blob'].includes(parts[2]);
  const hasBranchName = hasFileType && parts[3];

  return {
    owner: parts[0] || 'conwnet',
    repo: parts[1] || 'github1s',
    type: hasFileType ? parts[2] : 'tree',
    branch: hasBranchName ? parts[3] : 'HEAD',
    path: '/' + (hasBranchName ? parts.slice(4).join('/') : ''),
  };
};