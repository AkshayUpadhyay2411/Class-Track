#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()


void solve()
{ 
    ll n,m;
    cin>>n>>m;

    vector<int>val(n+1);
    for(int i=1;i<=n;i++)cin>>val[i];

    vector<set<int>>adj(n+1,set<int>());

    for(int i=0;i<m;i++){
        ll u,v;
        cin>>u>>v;

        adj[u].insert(v);
        adj[v].insert(u);
    }
    vector<int>bfs;
    vector<bool>vis(n+1);
    set<pair<int,int>>que;
    for(int i=1;i<=n;i++){
        que.insert({val[i],i});
    }
    // cout<<r<<endl;
    int cnt=0;
    while(!que.empty()){
        pair<int,int>r=*que.begin();
        que.erase(que.begin());
        if(!vis[r.second]){
            cnt++;
            if(cnt==2){
                cout<<"NO"<<endl;
                return;
            }
            set<pair<int,int>>q;
            q.insert(r);
            
            while(!q.empty()){
                pair<int,int>p=*(q.begin());
                vis[p.second]=1;
                // cout<<"node = "<<p.second<<endl;
                // for(auto u:adj[p.second])cout<<u<<" ";cout<<endl;
                bfs.push_back(p.second);
                q.erase(q.begin());
                for(auto u:adj[p.second]){
                    if(!vis[u]){
                        vis[u]=1;
                        q.insert({val[u],u});
                    }
                }
            }
        }
    }

    // reverse(all(bfs));

    // sort(all(bfs),[&](int a,int b){
    //     if(adj[a].find(b)!=adj[a].end()){
    //         return val[a]>val[b];
    //     }else{
    //         return true;
    //     }
    // });

    // for(auto c:bfs){
    //     cout<<c<<" ";
    // }cout<<endl;
    for(int i=0;i<bfs.size();i++){
        if(val[bfs[i]]>i){
            cout<<"NO"<<endl;
            return;
        }
    }
    cout<<"YES"<<endl;
}

int main(){
    ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL);
    int t=1;
    cin>>t;
    while(t--) {
         solve();
    }
    return 0; 
}