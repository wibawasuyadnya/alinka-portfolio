import { Search } from "lucide-react";
import { Language } from "@/types/enum";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { setTags } from "@/redux/slices/globalSlice";
import { useTagsData } from "@/hooks/data/useTagsData";


export default function Hero({
  language, selectedTags, search
}: {
  language: Language,
  selectedTags: string,
  search?: string
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: tags } = useTagsData({ language });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(search);

  useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSelectTagsFilter = (tag: string): void => {
    const newTag = selectedTags === tag ? "" : tag;
    dispatch(setTags(newTag));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    if (searchQuery?.trim()) {
      router.push(`?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push(`/blog`);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[400px]"
        dangerouslySetInnerHTML={{
          __html: `
                  <h2 class="font-playfair font-normal">My Blog</h2> 
                  <h1 class="text-6xl font-playfair font-normal tracking-wide text-primary-content">${language === "en" ? '<b>Art</b> & <b>Stories</b>' : '<b>Seni</b> & <b>Cerita</b>'}</h1>
                  <p class="mt-4 text-lg text-primary-content text-center">${language === "en"
              ? 'Discover my journey through art and stories.'
              : 'Temukan perjalanan saya melalui seni dan cerita.'}</p>
        `}}
      />
      <div className="px-10 flex-row flex justify-end items-center gap-5">
        <div onClick={toggleDropdown} className={`dropdown dropdown-bottom dropdown-end ${isDropdownOpen ? 'dropdown-open' : ''}`}>
          <div tabIndex={0} role="button" className="capitalize btn px-[10px] py-[8px] text-sm font-md bg-transparent border border-solid border-neutral text-neutral hover:text-white hover:border-neutral hover:bg-neutral">
            {selectedTags.length > 0 ? selectedTags : "Tags"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg"
          >
            {tags && tags.length > 0 && (
              tags.map((tagObj, idx) => (
                // Loop through each post and its associated tags
                <div key={idx}>
                  {tagObj.tags.map((tag, tagIdx) => (
                    <li key={tagIdx}>
                      <a
                        className={`${selectedTags.includes(tag) && "bg-primary text-white"}  capitalize`}
                        onClick={() => handleSelectTagsFilter(tag)}
                      >
                        {tag}
                      </a>
                    </li>
                  ))}
                </div>
              ))
            )}
          </ul>
        </div>
        <form onSubmit={handleSearchSubmit} className="input input-bordered flex items-center gap-2 border-neutral">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text" className="grow" placeholder="Search..." />
          <button type="submit"><Search className="w-5 h-5 stroke-neutral" /></button>
        </form>
      </div>
    </div>
  );
}
