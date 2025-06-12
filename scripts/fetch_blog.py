import requests
import json
import time
import random
from urllib import parse
from datetime import datetime

# 설정
COUNT_PER_PAGE = 10  # 페이지당 포스트 수 (적당히 제한)
BLOG_ID = 'tomas0124'
MAX_POSTS = 20  # 최대 가져올 포스트 수
OUTPUT_FILE = 'public/blog-data/post_list.json'

def get_blog_list(page):
    """네이버 블로그 포스트 목록을 가져오는 함수"""
    url = f'https://blog.naver.com/PostTitleListAsync.naver?blogId={BLOG_ID}&viewdate=&currentPage={page}&categoryNo=0&parentCategoryNo=&countPerPage={COUNT_PER_PAGE}'
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return json.loads(response.text.replace('\\', ''))['postList']
    except Exception as e:
        print(f'Error fetching blog list: {e}')
        return []

def format_post_data(post):
    """포스트 데이터를 포맷팅하는 함수"""
    try:
        # 날짜 포맷팅 (addDate 사용)
        add_date = post.get('addDate', '')
        formatted_date = add_date[:10] if len(add_date) >= 10 else add_date
        
        return {
            'title': parse.unquote(post.get('title', '')),
            'url': f'https://blog.naver.com/PostView.naver?blogId={BLOG_ID}&logNo={post["logNo"]}',
            'date': formatted_date,
            'logNo': post.get('logNo', ''),
        }
    except Exception as e:
        print(f'Error formatting post data: {e}')
        return None

def main():
    """메인 실행 함수"""
    print(f'Starting blog crawling for {BLOG_ID}...')
    
    page = 0
    post_count = 0
    post_list = []
    
    while post_count < MAX_POSTS:
        print(f'Fetching page {page}...')
        posts = get_blog_list(page)
        
        if not posts:
            print('No more posts found or error occurred')
            break
        
        for post in posts:
            if post_count >= MAX_POSTS:
                break
                
            formatted_post = format_post_data(post)
            if formatted_post:
                post_list.append(formatted_post)
                post_count += 1
                print(f'Post {post_count}: {formatted_post["title"][:50]}...')
        
        if len(posts) != COUNT_PER_PAGE:
            print('Reached end of posts')
            break
        
        page += 1
        # 요청 간격 조절
        time.sleep(random.uniform(1.0, 2.0))
    
    # 결과 저장
    result = {
        'lastUpdated': datetime.now().isoformat(),
        'blogId': BLOG_ID,
        'totalPosts': len(post_list),
        'posts': post_list
    }
    
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f'Successfully saved {len(post_list)} posts to {OUTPUT_FILE}')
    except Exception as e:
        print(f'Error saving file: {e}')

if __name__ == "__main__":
    main() 