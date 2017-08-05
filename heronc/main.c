#include <stdio.h>
#include <stdlib.h>

const char * MACROS[] = {
	"HERON int",
	"STORK char",
	"EAGLE long",
	"WOODPECKER short",
	"EGG void",
	"FLAMINGO double",
	"PIGEON float",
	"featherless unsigned",
	"heronstart int main(int baby_count, char ** baby_names)",
	"BEAK *",
	"contemplate(x) if(x)",
	"otherwise else",
	"permanent const",
	"spit return",
	"POTS_AND_PANS_ARE_MESSY 1",
	"POTS_AND_PANS_ARE_CLEAN 0",
	"when while",
	"fly for",
	"lay_eggs switch",
	"this_egg case",
	"cracked_egg default",
	"squark(...) printf(__VA_ARGS__)",
	"nonono !",
	"heron_agreement ==",
	"heron_snatch -",
	"heron_reproduce *",
	"heron_sum +",
	"heron_split",
	"messwithpotsandpans() squark(\"i am a heron. i haev a long neck and i pick fish out of the water w/ my beak. if you dont repost this comment on 10 other pages i will fly into your kitchen tonight and make a mess of your? pots and pans\\n\")",
	"stork_beak_to_heron(x) atoi(x)"}; 
const char * MISC[] = {"#include <stdio.h>",
			"#include <stdlib.h>"};

const int NUM_MISC = sizeof(MISC) / sizeof(char*);
const int NUM_MACROS = sizeof(MACROS) / sizeof(char*);

char* oldtext;

int main(int argc, char ** argv) {
	if(argc >= 2) {
		add_heron(argv[1]);
		compile(argv[1]);
		repair(argv[1]);
	} else {
		printf("no file lol\n");
	}
}

char *read_from_file(const char *filename) {
    long int size = 0;
    FILE *file = fopen(filename, "rb+");

    if(!file) {
        fputs("File error.\n", stderr);
        return NULL;
    }

    fseek(file, 0, SEEK_END);
    size = ftell(file);
    rewind(file);

    char *result = (char *) malloc(size);
    if(!result) {
        fputs("Memory error.\n", stderr);
        return NULL;
    }

    if(fread(result, 1, size, file) != size) {
        fputs("Read error.\n", stderr);
        return NULL;
    }

    fclose(file);
    return result;
}

int repair(char * filename) {
	FILE * input_file;
	if(!(input_file = fopen(filename,"wb"))) {
		return -1;
	}

	fputs(oldtext,input_file);
	fclose(input_file);
	return 0;
}

int add_heron(char * filename) {
	FILE * input_file;
	oldtext = read_from_file(filename);

	if(!(input_file = fopen(filename,"w"))) {
		return -1;
	}

	int i;	
	for(i = 0; i < NUM_MACROS; i++) {
		fprintf(input_file, "#define %s\n",MACROS[i]);
	}
	for(i = 0; i < NUM_MISC; i++) {
		fprintf(input_file, "%s\n",MISC[i]);
	}

	fputs(oldtext,input_file);
	fclose(input_file);
	return 0;
}

int compile(char * filename) {
	char temp[512]; 
	#if defined _WIN32 
		#define exe ".exe"
	#else
		#define exe ""
	#endif
	sprintf(temp, "gcc%s -w -x c %s",exe,filename);
	return system((char *)temp);
}


